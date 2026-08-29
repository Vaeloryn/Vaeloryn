# VAELO Prototype V1.1 — Historical / Non-Canonical

Test-only prototype for **Vaeloryn (VAELO)** on the Base/Ethereum ecosystem.

**Status: Historical Base Sepolia testnet prototype; 14/14 automated tests passing.**

## Current working design

- Network target: Base
- Test network: Base Sepolia (chain ID 84532)
- Standard: ERC-20
- Maximum supply: 1,000,000,000 VAELO
- Additional minting: none
- Historical prototype founder allocation: 150,000,000 VAELO (15%)
- Historical prototype founder vesting: 5 years, with cumulative vesting of 10%, 25%, 45%, 70%, 100%
- Year 1 vesting is linear and totals 15,000,000 VAELO

## Genesis allocation

- 35% Ecosystem & Mission Treasury (350,000,000 VAELO)
- 25% Public & Community (250,000,000 VAELO)
- 15% Historical V1.1 Founder Vesting (150,000,000 VAELO)
- 10% Future Team & Advisers (100,000,000 VAELO)
- 10% Strategic Partnerships (100,000,000 VAELO)
- 5% Long-Term Reserve (50,000,000 VAELO)

## Files

- `contracts/VaelorynToken.sol`
- `contracts/VaelorynGenesisAllocator.sol`
- `contracts/VaelorynFounderVesting.sol`
- `scripts/deploy.js`
- `test/VaeloPrototype.test.js`
- `test/VaeloPrototype.additional.test.js`

## Local setup

Requires a recent Node.js LTS release.

```bash
npm install
npm run compile
npm test
```

## Base Sepolia deployment

The deployment script includes a chain-ID safety check. It will refuse to run
unless it is connected to Base Sepolia (chain ID 84532). This prevents
accidental mainnet deployment.

### Required environment variables

| Variable | Description |
|---|---|
| `BASE_SEPOLIA_RPC_URL` | Base Sepolia RPC endpoint (default: `https://sepolia.base.org`) |
| `DEPLOYER_PRIVATE_KEY` | Test wallet private key — **never commit this value** |

### Steps

1. Copy `.env.example` to `.env`.
2. Use a **dedicated test wallet only** — never use a wallet that holds real funds.
3. Add Base Sepolia test ETH to that wallet via the Base Sepolia faucet.
4. Store the test wallet private key in `.env` (or Replit Secrets).
5. Never commit `.env` or expose the private key anywhere.
6. Run:

```bash
npm run deploy:base-sepolia
```

## Changelog

### V1.1
- Added comprehensive additional test suite (`test/VaeloPrototype.additional.test.js`).
- Added chain-ID safety guard to `scripts/deploy.js` (refuses deployment unless connected to Base Sepolia, chain ID 84532).
- Updated version to 1.1.0.
- Updated README to reflect V1.1 state and document required environment variables.
- All three smart contracts unchanged from V1.

### V1
- Initial prototype: `VaelorynToken`, `VaelorynGenesisAllocator`, `VaelorynFounderVesting`.
- Original 3-test suite passing.

## Important prototype limitations

This project is for development and testnet experimentation only.

The deployment script temporarily uses the deployer address for multiple treasury
roles. A production version must use properly separated treasury addresses and
appropriate multisignature controls.

The historical V1.1 testnet deployment starts the prototype vesting clock immediately for
testing. The production Founder vesting schedule is intended to begin on the
approved official VAELO public/token launch date.

No public sale or mainnet deployment should use this prototype without legal/regulatory
review, production security review, final treasury governance, and independent
smart-contract audit appropriate to the value at risk.
