const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

// ──────────────────────────────────────────────────────────────────────────────
// Historical V1.1 prototype helper: deploy the three-contract system and fund
// the vesting contract with its historical 150 000 000 VAELO allocation.
// ──────────────────────────────────────────────────────────────────────────────
async function deployVesting() {
  const [owner, founder] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("VaelorynToken");
  const token = await Token.deploy(owner.address);

  const start = (await time.latest()) + 100; // 100 s in the future

  const Vesting = await ethers.getContractFactory("VaelorynFounderVesting");
  const vesting = await Vesting.deploy(
    await token.getAddress(),
    founder.address,
    start
  );

  // Fund the vesting contract
  await token.transfer(
    await vesting.getAddress(),
    ethers.parseEther("150000000")
  );

  return { token, vesting, owner, founder, start };
}

const YEAR = 365 * 24 * 60 * 60; // seconds

// ──────────────────────────────────────────────────────────────────────────────
// 1. Genesis allocator: zero residual balance
// ──────────────────────────────────────────────────────────────────────────────
describe("VaelorynGenesisAllocator – additional coverage", function () {
  it("leaves exactly zero VAELO in the allocator after genesis", async function () {
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

    const Allocator = await ethers.getContractFactory(
      "VaelorynGenesisAllocator"
    );
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

    // The allocator must hold no residual VAELO
    expect(
      await token.balanceOf(await allocator.getAddress())
    ).to.equal(0n);
  });
});

// ──────────────────────────────────────────────────────────────────────────────
// 2. Historical V1.1 founder vesting – cumulative schedule years 2, 3, 4
// ──────────────────────────────────────────────────────────────────────────────
describe("Historical V1.1 VaelorynFounderVesting – cumulative schedule (Years 2–4)", function () {
  it("vests exactly 25% (37 500 000 VAELO) by Year 2", async function () {
    const { vesting, start } = await deployVesting();

    expect(await vesting.vestedAmount(start + 2 * YEAR)).to.equal(
      ethers.parseEther("37500000")
    );
  });

  it("vests exactly 45% (67 500 000 VAELO) by Year 3", async function () {
    const { vesting, start } = await deployVesting();

    expect(await vesting.vestedAmount(start + 3 * YEAR)).to.equal(
      ethers.parseEther("67500000")
    );
  });

  it("vests exactly 70% (105 000 000 VAELO) by Year 4", async function () {
    const { vesting, start } = await deployVesting();

    expect(await vesting.vestedAmount(start + 4 * YEAR)).to.equal(
      ethers.parseEther("105000000")
    );
  });

  it("returns 0 vested at exactly the start timestamp", async function () {
    const { vesting, start } = await deployVesting();

    expect(await vesting.vestedAmount(start)).to.equal(0n);
  });

  it("returns 0 vested before the start timestamp", async function () {
    const { vesting, start } = await deployVesting();

    expect(await vesting.vestedAmount(start - 1)).to.equal(0n);
  });
});

// ──────────────────────────────────────────────────────────────────────────────
// 3. Founder vesting – release() access controls
// ──────────────────────────────────────────────────────────────────────────────
describe("VaelorynFounderVesting – release() controls", function () {
  it("reverts when called before the vesting start date", async function () {
    const { vesting } = await deployVesting();

    // Block time is still before `start`, so nothing is releasable
    await expect(vesting.release()).to.be.revertedWith("Nothing releasable");
  });

  it("releases only vested tokens and nothing more after Year 1", async function () {
    const { vesting, token, founder, start } = await deployVesting();

    // Pin the release() tx to exactly the Year-1 boundary so the linear
    // vesting formula returns the unambiguous 10 % milestone value.
    await time.setNextBlockTimestamp(start + YEAR);
    await vesting.release();

    const expectedYear1 = ethers.parseEther("15000000"); // 10 %

    // Founder received exactly the Year-1 vested amount
    expect(await token.balanceOf(founder.address)).to.equal(expectedYear1);

    // released counter matches
    expect(await vesting.released()).to.equal(expectedYear1);
  });

  it("prevents releasing the same vested amount twice (no double-spend)", async function () {
    const { vesting, start } = await deployVesting();

    // Pin the release() tx to exactly the Year-1 boundary
    await time.setNextBlockTimestamp(start + YEAR);
    await vesting.release();

    // releasableAmount() is a view that uses the latest mined block timestamp
    // (= start + YEAR). At that exact timestamp, released == vestedAmount, so
    // nothing further is releasable — confirming no double-spend is possible.
    const releasable = await vesting.releasableAmount();
    expect(releasable).to.equal(0n);
  });

  it("accounts for prior releases when computing releasable at Year 2", async function () {
    const { vesting, token, founder, start } = await deployVesting();

    // Pin each release() to the exact year-boundary timestamp
    await time.setNextBlockTimestamp(start + YEAR);
    await vesting.release();

    await time.setNextBlockTimestamp(start + 2 * YEAR);
    await vesting.release();

    // Cumulative 25 % = 37 500 000 VAELO should now be with the founder
    expect(await token.balanceOf(founder.address)).to.equal(
      ethers.parseEther("37500000")
    );
    expect(await vesting.released()).to.equal(
      ethers.parseEther("37500000")
    );
  });

  it("releases the full historical 150 000 000 VAELO by Year 5 in one or more calls", async function () {
    const { vesting, token, founder, start } = await deployVesting();

    // Advance past the historical five-year schedule and release everything at once
    await time.increaseTo(start + 5 * YEAR + 1);
    await vesting.release();

    expect(await token.balanceOf(founder.address)).to.equal(
      ethers.parseEther("150000000")
    );
    expect(await vesting.released()).to.equal(
      ethers.parseEther("150000000")
    );
  });
});
