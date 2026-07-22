const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying VAELO Prototype V1 with:", deployer.address);

  // Prototype launch timestamp. For testnet only, vesting starts immediately.
  // Production deployment must use the approved official public-launch timestamp.
  const launchTimestamp = Math.floor(Date.now() / 1000);

  // Temporary prototype treasury addresses use the deployer.
  // Production MUST use separately controlled treasury/multisig addresses.
  const ecosystemTreasury = deployer.address;
  const communityTreasury = deployer.address;
  const teamTreasury = deployer.address;
  const strategicTreasury = deployer.address;
  const longTermReserve = deployer.address;
  const founderBeneficiary = deployer.address;

  // Deploy token temporarily to deployer, then allocator.
  // This avoids circular constructor-address dependencies in this simple prototype.
  const Token = await hre.ethers.getContractFactory("VaelorynToken");
  const token = await Token.deploy(deployer.address);
  await token.waitForDeployment();

  const Vesting = await hre.ethers.getContractFactory("VaelorynFounderVesting");
  const vesting = await Vesting.deploy(
    await token.getAddress(),
    founderBeneficiary,
    launchTimestamp
  );
  await vesting.waitForDeployment();

  const Allocator = await hre.ethers.getContractFactory("VaelorynGenesisAllocator");
  const allocator = await Allocator.deploy(
    await token.getAddress(),
    ecosystemTreasury,
    communityTreasury,
    await vesting.getAddress(),
    teamTreasury,
    strategicTreasury,
    longTermReserve
  );
  await allocator.waitForDeployment();

  await (await token.transfer(
    await allocator.getAddress(),
    hre.ethers.parseEther("1000000000")
  )).wait();

  await (await allocator.allocateGenesis()).wait();

  console.log("VAELO:", await token.getAddress());
  console.log("Founder Vesting:", await vesting.getAddress());
  console.log("Genesis Allocator:", await allocator.getAddress());
  console.log("Prototype genesis allocation complete.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
