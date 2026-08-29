// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Test} from "forge-std/Test.sol";

import {VaelorynToken} from "../src/VaelorynToken.sol";
import {VaelorynFounderVesting} from "../src/VaelorynFounderVesting.sol";
import {VaelorynGenesisDistribution} from "../src/VaelorynGenesisDistribution.sol";
import {VaelorynDeploymentFactory} from "../src/VaelorynDeploymentFactory.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GetterCompatibleMaliciousVesting {
    IERC20 public immutable vaelo;
    uint256 public constant TOTAL_ALLOCATION = 100_000_000 ether;

    constructor(address token) {
        vaelo = IERC20(token);
    }

    function drain(address recipient) external {
        vaelo.transfer(recipient, vaelo.balanceOf(address(this)));
    }
}

contract VaelorynCanonicalTest is Test {
    uint256 internal constant ECOSYSTEM_KEY = 0xA11CE;
    uint256 internal constant SPENDER_KEY = 0xB0B;

    address internal ecosystem;
    address internal publicDistribution;
    address internal treasury;
    address internal team;
    address internal strategic;
    address internal founder;
    address internal spender;

    uint256 internal t0;

    VaelorynToken internal token;
    VaelorynGenesisDistribution internal distribution;
    VaelorynFounderVesting internal vesting;

    function setUp() public {
        ecosystem = vm.addr(ECOSYSTEM_KEY);
        publicDistribution = makeAddr("publicDistribution");
        treasury = makeAddr("treasury");
        team = makeAddr("team");
        strategic = makeAddr("strategic");
        founder = makeAddr("founder");
        spender = vm.addr(SPENDER_KEY);

        distribution = new VaelorynGenesisDistribution(
            ecosystem,
            publicDistribution,
            treasury,
            team,
            strategic
        );
        token = new VaelorynToken(address(distribution));

        t0 = block.timestamp + 7 days;
        vesting = new VaelorynFounderVesting(address(token), founder, t0);
    }

    function _allocateGenesis() internal {
        distribution.allocateGenesis(address(token), address(vesting));
    }

    function testFixedSupplyMintsDirectlyToGenesisDistribution() public view {
        assertEq(token.name(), "Vaeloryn");
        assertEq(token.symbol(), "VAELO");
        assertEq(token.decimals(), 18);
        assertEq(token.totalSupply(), token.TOTAL_SUPPLY());
        assertEq(token.TOTAL_SUPPLY(), 1_000_000_000 ether);
        assertEq(token.balanceOf(address(distribution)), token.TOTAL_SUPPLY());
        assertEq(token.genesisDistribution(), address(distribution));
    }

    function testTokenHasNoOwnerAdminOrMintEntryPoint() public {
        (bool ownerFound,) = address(token).staticcall(abi.encodeWithSignature("owner()"));
        assertFalse(ownerFound);

        (bool mintFound,) = address(token).call(
            abi.encodeWithSignature("mint(address,uint256)", address(this), 1)
        );
        assertFalse(mintFound);
        assertEq(token.totalSupply(), token.TOTAL_SUPPLY());
    }

    function testGenesisAllocationCoversAllSixCanonicalCategoriesExactlyOnce() public {
        _allocateGenesis();

        assertTrue(distribution.allocationCompleted());
        assertEq(token.balanceOf(ecosystem), 300_000_000 ether);
        assertEq(token.balanceOf(publicDistribution), 200_000_000 ether);
        assertEq(token.balanceOf(treasury), 200_000_000 ether);
        assertEq(token.balanceOf(team), 150_000_000 ether);
        assertEq(token.balanceOf(address(vesting)), 100_000_000 ether);
        assertEq(token.balanceOf(strategic), 50_000_000 ether);
        assertEq(token.balanceOf(address(distribution)), 0);
        assertEq(distribution.founderVestingRecipient(), address(vesting));

        uint256 distributed =
            token.balanceOf(ecosystem) +
            token.balanceOf(publicDistribution) +
            token.balanceOf(treasury) +
            token.balanceOf(team) +
            token.balanceOf(address(vesting)) +
            token.balanceOf(strategic);
        assertEq(distributed, token.TOTAL_SUPPLY());

        vm.expectRevert(VaelorynGenesisDistribution.AllocationAlreadyCompleted.selector);
        distribution.allocateGenesis(address(token), address(vesting));
    }

    function testGenesisRejectsWrongFounderVesting() public {
        vm.expectRevert();
        distribution.allocateGenesis(address(token), makeAddr("notFounderVesting"));
    }

    function testOnlyDeploymentFactoryCanAllocateGenesis() public {
        address attacker = makeAddr("attacker");

        vm.startPrank(attacker);
        vm.expectRevert(VaelorynGenesisDistribution.OnlyDeploymentFactory.selector);
        distribution.allocateGenesis(address(token), address(vesting));
        vm.stopPrank();

        assertFalse(distribution.allocationCompleted());
        _allocateGenesis();
        assertTrue(distribution.allocationCompleted());
    }

    function testGetterCompatibleMaliciousVestingCannotFrontRunAllocation() public {
        GetterCompatibleMaliciousVesting malicious = new GetterCompatibleMaliciousVesting(
            address(token)
        );
        address attacker = makeAddr("attacker");

        vm.startPrank(attacker);
        vm.expectRevert(VaelorynGenesisDistribution.OnlyDeploymentFactory.selector);
        distribution.allocateGenesis(address(token), address(malicious));
        vm.stopPrank();

        assertFalse(distribution.allocationCompleted());
        assertEq(token.balanceOf(address(distribution)), token.TOTAL_SUPPLY());

        _allocateGenesis();
        assertEq(token.balanceOf(address(malicious)), 0);
        assertEq(token.balanceOf(address(vesting)), vesting.TOTAL_ALLOCATION());
    }

    function testFakeTokenCannotFrontRunGenesisAllocation() public {
        VaelorynToken fakeToken = new VaelorynToken(address(distribution));
        address attacker = makeAddr("fakeTokenAttacker");

        vm.startPrank(attacker);
        vm.expectRevert(VaelorynGenesisDistribution.OnlyDeploymentFactory.selector);
        distribution.allocateGenesis(address(fakeToken), address(vesting));
        vm.stopPrank();

        assertFalse(distribution.allocationCompleted());
        assertEq(token.balanceOf(address(distribution)), token.TOTAL_SUPPLY());
        assertEq(fakeToken.balanceOf(address(distribution)), fakeToken.TOTAL_SUPPLY());

        _allocateGenesis();
        assertEq(token.balanceOf(address(vesting)), vesting.TOTAL_ALLOCATION());
    }

    function testFactoryDeploysAndAllocatesAtomically() public {
        vm.warp(30 days);
        VaelorynDeploymentFactory factory = new VaelorynDeploymentFactory(
            ecosystem,
            publicDistribution,
            treasury,
            team,
            strategic,
            founder
        );
        VaelorynToken deployedToken = factory.token();
        VaelorynGenesisDistribution deployedDistribution = factory.distribution();
        VaelorynFounderVesting deployedVesting = factory.vesting();

        assertEq(deployedDistribution.deploymentFactory(), address(factory));
        assertTrue(deployedDistribution.allocationCompleted());
        assertEq(deployedToken.genesisDistribution(), address(deployedDistribution));
        assertEq(deployedToken.balanceOf(address(deployedDistribution)), 0);
        assertEq(
            deployedToken.balanceOf(address(deployedVesting)),
            deployedVesting.TOTAL_ALLOCATION()
        );
        assertEq(deployedVesting.startTimestamp(), block.timestamp);
    }

    function testFactoryCannotDeployASecondCanonicalInstance() public {
        VaelorynDeploymentFactory factory = new VaelorynDeploymentFactory(
            ecosystem,
            publicDistribution,
            treasury,
            team,
            strategic,
            founder
        );

        (bool success,) = address(factory).call(
            abi.encodeWithSignature(
                "deployCanonical(address,address,address,address,address,address)",
                ecosystem,
                publicDistribution,
                treasury,
                team,
                strategic,
                founder
            )
        );

        assertFalse(success);
        assertTrue(factory.distribution().allocationCompleted());
    }

    function testAllocationConstantsSumToFixedSupply() public view {
        uint256 allocationSum =
            distribution.ECOSYSTEM_AND_COMMUNITY() +
            distribution.PUBLIC_DISTRIBUTION() +
            distribution.VAELORYN_TREASURY() +
            distribution.TEAM_AND_CONTRIBUTORS() +
            distribution.FOUNDER() +
            distribution.STRATEGIC_PARTNERSHIPS();

        assertEq(allocationSum, token.TOTAL_SUPPLY());
        assertEq(distribution.FOUNDER(), vesting.TOTAL_ALLOCATION());
    }

    function testBurnAndBurnFromReduceSupply() public {
        _allocateGenesis();

        vm.prank(ecosystem);
        token.burn(1 ether);
        assertEq(token.totalSupply(), token.TOTAL_SUPPLY() - 1 ether);

        vm.prank(ecosystem);
        token.approve(spender, 2 ether);
        vm.prank(spender);
        token.burnFrom(ecosystem, 2 ether);

        assertEq(token.totalSupply(), token.TOTAL_SUPPLY() - 3 ether);
        assertEq(token.balanceOf(ecosystem), 300_000_000 ether - 3 ether);
    }

    function testPermitUsesEip712DomainAndIncrementsNonce() public {
        _allocateGenesis();

        uint256 amount = 42 ether;
        uint256 deadline = block.timestamp + 1 days;
        uint256 nonce = token.nonces(ecosystem);
        bytes32 permitTypehash =
            keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
        bytes32 structHash = keccak256(
            abi.encode(permitTypehash, ecosystem, spender, amount, nonce, deadline)
        );
        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", token.DOMAIN_SEPARATOR(), structHash)
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ECOSYSTEM_KEY, digest);

        token.permit(ecosystem, spender, amount, deadline, v, r, s);

        assertEq(token.allowance(ecosystem, spender), amount);
        assertEq(token.nonces(ecosystem), nonce + 1);
    }

    function testPermitRejectsReplayedSignature() public {
        _allocateGenesis();

        uint256 amount = 42 ether;
        uint256 deadline = block.timestamp + 1 days;
        uint256 nonce = token.nonces(ecosystem);
        bytes32 permitTypehash =
            keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
        bytes32 structHash = keccak256(
            abi.encode(permitTypehash, ecosystem, spender, amount, nonce, deadline)
        );
        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", token.DOMAIN_SEPARATOR(), structHash)
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ECOSYSTEM_KEY, digest);

        token.permit(ecosystem, spender, amount, deadline, v, r, s);
        vm.expectRevert();
        token.permit(ecosystem, spender, amount, deadline, v, r, s);
    }

    function testPermitRejectsExpiredSignature() public {
        _allocateGenesis();

        uint256 amount = 42 ether;
        uint256 deadline = block.timestamp;
        uint256 nonce = token.nonces(ecosystem);
        bytes32 permitTypehash =
            keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
        bytes32 structHash = keccak256(
            abi.encode(permitTypehash, ecosystem, spender, amount, nonce, deadline)
        );
        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", token.DOMAIN_SEPARATOR(), structHash)
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ECOSYSTEM_KEY, digest);

        vm.warp(deadline + 1);
        vm.expectRevert();
        token.permit(ecosystem, spender, amount, deadline, v, r, s);
    }

    function testPermitRejectsIncorrectSigner() public {
        _allocateGenesis();

        uint256 amount = 42 ether;
        uint256 deadline = block.timestamp + 1 days;
        uint256 nonce = token.nonces(ecosystem);
        bytes32 permitTypehash =
            keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
        bytes32 structHash = keccak256(
            abi.encode(permitTypehash, ecosystem, spender, amount, nonce, deadline)
        );
        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", token.DOMAIN_SEPARATOR(), structHash)
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(SPENDER_KEY, digest);

        vm.expectRevert();
        token.permit(ecosystem, spender, amount, deadline, v, r, s);
    }

    function testPermitRejectsIncorrectNonce() public {
        _allocateGenesis();

        uint256 amount = 42 ether;
        uint256 deadline = block.timestamp + 1 days;
        uint256 nonce = token.nonces(ecosystem) + 1;
        bytes32 permitTypehash =
            keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
        bytes32 structHash = keccak256(
            abi.encode(permitTypehash, ecosystem, spender, amount, nonce, deadline)
        );
        bytes32 digest = keccak256(
            abi.encodePacked("\x19\x01", token.DOMAIN_SEPARATOR(), structHash)
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ECOSYSTEM_KEY, digest);

        vm.expectRevert();
        token.permit(ecosystem, spender, amount, deadline, v, r, s);
    }

    function testEip712DomainSeparatorMatchesCanonicalTokenDomain() public view {
        bytes32 expectedDomainSeparator = keccak256(
            abi.encode(
                keccak256(
                    "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                ),
                keccak256(bytes("Vaeloryn")),
                keccak256(bytes("1")),
                block.chainid,
                address(token)
            )
        );

        assertEq(token.DOMAIN_SEPARATOR(), expectedDomainSeparator);
    }

    function testVestingInitialReleaseAndPreStartBehavior() public {
        _allocateGenesis();

        vm.warp(t0 - 1);
        assertEq(vesting.vestedAmount(block.timestamp), 0);
        vm.expectRevert(VaelorynFounderVesting.NothingReleasable.selector);
        vesting.release();

        vm.warp(t0);
        assertEq(vesting.vestedAmount(block.timestamp), 2_500_000 ether);
        vesting.release();
        assertEq(token.balanceOf(founder), 2_500_000 ether);
        assertEq(vesting.released(), 2_500_000 ether);
    }

    function testVestingExactCanonicalBoundariesAndNoFourthRelease() public view {
        assertEq(vesting.vestedAmount(t0), 2_500_000 ether);
        assertEq(vesting.vestedAmount(t0 + 90 days - 1), 2_500_000 ether);
        assertEq(vesting.vestedAmount(t0 + 90 days), 5_000_000 ether);
        assertEq(vesting.vestedAmount(t0 + 180 days), 7_500_000 ether);
        assertEq(vesting.vestedAmount(t0 + 270 days), 10_000_000 ether);
        uint256 linearElapsedAt360Days = 90 days;
        uint256 linearAmountAt360Days =
            (vesting.LINEAR_ALLOCATION() * linearElapsedAt360Days) /
            vesting.LINEAR_DURATION();
        uint256 expectedAt360Days =
            10_000_000 ether +
            linearAmountAt360Days;
        assertEq(vesting.vestedAmount(t0 + 360 days), expectedAt360Days);

        uint256 midpoint = vesting.linearStartTimestamp() + (vesting.LINEAR_DURATION() / 2);
        assertEq(vesting.vestedAmount(midpoint), 55_000_000 ether);
        assertEq(vesting.vestedAmount(vesting.linearEndTimestamp()), 100_000_000 ether);
    }

    function testVestingRepeatedClaimsCannotDoubleRelease() public {
        _allocateGenesis();

        vm.warp(t0);
        vesting.release();
        vm.expectRevert(VaelorynFounderVesting.NothingReleasable.selector);
        vesting.release();

        vm.warp(t0 + 90 days);
        vesting.release();
        assertEq(vesting.released(), 5_000_000 ether);
        assertEq(token.balanceOf(founder), 5_000_000 ether);
        assertLe(vesting.released(), vesting.vestedAmount(block.timestamp));
    }

    function testThirdPartyCanTriggerFounderClaimOnlyFounderReceivesTokens() public {
        _allocateGenesis();

        address thirdParty = makeAddr("thirdParty");
        vm.warp(t0);

        vm.prank(thirdParty);
        vesting.release();

        assertEq(token.balanceOf(founder), 2_500_000 ether);
        assertEq(token.balanceOf(thirdParty), 0);
        assertEq(vesting.released(), 2_500_000 ether);
        assertLe(vesting.released(), vesting.TOTAL_ALLOCATION());
    }

    function testVestingCannotExceedFounderAllocation() public {
        _allocateGenesis();

        vm.warp(vesting.linearEndTimestamp());
        vesting.release();

        assertEq(vesting.released(), vesting.TOTAL_ALLOCATION());
        assertEq(token.balanceOf(founder), vesting.TOTAL_ALLOCATION());
        assertEq(token.balanceOf(address(vesting)), 0);

        vm.warp(vesting.linearEndTimestamp() + (100 * 365 days));
        vm.expectRevert(VaelorynFounderVesting.NothingReleasable.selector);
        vesting.release();
        assertEq(vesting.released(), vesting.TOTAL_ALLOCATION());
    }

    function testZeroAddressValidation() public {
        vm.expectRevert(VaelorynToken.InvalidGenesisDistribution.selector);
        new VaelorynToken(address(0));

        vm.expectRevert(VaelorynGenesisDistribution.InvalidRecipient.selector);
        new VaelorynGenesisDistribution(address(0), publicDistribution, treasury, team, strategic);

        vm.expectRevert(VaelorynFounderVesting.InvalidToken.selector);
        new VaelorynFounderVesting(address(0), founder, t0);

        vm.expectRevert(VaelorynFounderVesting.InvalidBeneficiary.selector);
        new VaelorynFounderVesting(address(token), address(0), t0);
    }

    function testFuzzVestingNeverExceedsCap(uint256 timestamp) public view {
        uint256 boundedTimestamp = bound(
            timestamp,
            t0 - 1,
            vesting.linearEndTimestamp() + 10_000 days
        );

        assertLe(vesting.vestedAmount(boundedTimestamp), vesting.TOTAL_ALLOCATION());
    }

    function testFuzzVestingIsMonotonic(uint256 first, uint256 second) public view {
        first = bound(first, t0 - 1, vesting.linearEndTimestamp() + 1_000 days);
        second = bound(second, t0 - 1, vesting.linearEndTimestamp() + 1_000 days);
        if (first > second) {
            (first, second) = (second, first);
        }

        assertLe(vesting.vestedAmount(first), vesting.vestedAmount(second));
    }
}
