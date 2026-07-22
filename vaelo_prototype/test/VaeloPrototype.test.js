const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("VAELO Prototype V1", function () {
  it("creates exactly one billion VAELO with no additional mint interface", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("VaelorynToken");
    const token = await Token.deploy(owner.address);

    expect(await token.totalSupply()).to.equal(ethers.parseEther("1000000000"));
    expect(await token.MAX_SUPPLY()).to.equal(ethers.parseEther("1000000000"));
    expect(token.interface.hasFunction("mint")).to.equal(false);
  });

  it("distributes the full genesis supply exactly once", async function () {
    const [owner, eco, community, team, strategic, reserve, founder] =
      await ethers.getSigners();

    const Token = await ethers.getContractFactory("VaelorynToken");
    const token = await Token.deploy(owner.address);

    const start = (await time.latest()) + 100;

    const Vesting = await ethers.getContractFactory("VaelorynFounderVesting");
    const vesting = await Vesting.deploy(
      await token.getAddress(),
      founder.address,
      start
    );

    const Allocator = await ethers.getContractFactory("VaelorynGenesisAllocator");
    const allocator = await Allocator.deploy(
      await token.getAddress(),
      eco.address,
      community.address,
      await vesting.getAddress(),
      team.address,
      strategic.address,
      reserve.address
    );

    await token.transfer(
      await allocator.getAddress(),
      ethers.parseEther("1000000000")
    );
    await allocator.allocateGenesis();

    expect(await token.balanceOf(eco.address)).to.equal(ethers.parseEther("350000000"));
    expect(await token.balanceOf(community.address)).to.equal(ethers.parseEther("250000000"));
    expect(await token.balanceOf(await vesting.getAddress())).to.equal(ethers.parseEther("150000000"));
    expect(await token.balanceOf(team.address)).to.equal(ethers.parseEther("100000000"));
    expect(await token.balanceOf(strategic.address)).to.equal(ethers.parseEther("100000000"));
    expect(await token.balanceOf(reserve.address)).to.equal(ethers.parseEther("50000000"));

    await expect(allocator.allocateGenesis()).to.be.revertedWith("Already allocated");
  });

  it("vests 10% of the founder allocation over Year 1 and 100% by Year 5", async function () {
    const [owner, founder] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("VaelorynToken");
    const token = await Token.deploy(owner.address);

    const start = (await time.latest()) + 100;

    const Vesting = await ethers.getContractFactory("VaelorynFounderVesting");
    const vesting = await Vesting.deploy(
      await token.getAddress(),
      founder.address,
      start
    );

    await token.transfer(
      await vesting.getAddress(),
      ethers.parseEther("150000000")
    );

    const YEAR = 365 * 24 * 60 * 60;

    expect(await vesting.vestedAmount(start)).to.equal(0);

    // Halfway through Year 1 = 7.5m under continuous linear vesting.
    expect(await vesting.vestedAmount(start + Math.floor(YEAR / 2)))
      .to.equal(ethers.parseEther("7500000"));

    expect(await vesting.vestedAmount(start + YEAR))
      .to.equal(ethers.parseEther("15000000"));

    expect(await vesting.vestedAmount(start + 5 * YEAR))
      .to.equal(ethers.parseEther("150000000"));
  });
});
