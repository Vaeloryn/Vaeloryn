# VAELO Prototype V1

Test-only prototype for **Vaeloryn (VAELO)** on the Base/Ethereum ecosystem.

## Current working design

- Network target: Base
- Test network: Base Sepolia
- Standard: ERC-20
- Maximum supply: 1,000,000,000 VAELO
- Additional minting: none
- Founder allocation: 150,000,000 VAELO (15%)
- Founder vesting: 5 years, with cumulative vesting of 10%, 25%, 45%, 70%, 100%
- Year 1 vesting is linear and totals 15,000,000 VAELO

## Genesis allocation

- 35% Ecosystem & Mission Treasury
- 25% Public & Community
- 15% Founder Vesting
- 10% Future Team & Advisers
- 10% Strategic Partnerships
- 5% Long-Term Reserve

## Files

- `contracts/VaelorynToken.sol`
- `contracts/VaelorynGenesisAllocator.sol`
- `contracts/VaelorynFounderVesting.sol`
- `scripts/deploy.js`
- `test/VaeloPrototype.test.js`

## Local setup

Requires a recent Node.js LTS release.

```bash
npm install
npm run compile
npm test
```

## Base Sepolia deployment

1. Copy `.env.example` to `.env`.
2. Use a dedicated test wallet only.
3. Add Base Sepolia test ETH to that wallet.
4. Put the test wallet private key in `.env`.
5. Never commit `.env` or expose the private key.
6. Run:

```bash
npm run deploy:base-sepolia
```

## Important prototype limitations

This project is for development and testnet experimentation only.

The deployment script temporarily uses the deployer address for multiple treasury roles. A production version must use properly separated treasury addresses and appropriate multisignature controls.

The testnet deployment starts the prototype vesting clock immediately for testing. The production Founder vesting schedule is intended to begin on the approved official VAELO public/token launch date.

No public sale or mainnet deployment should use this prototype without legal/regulatory review, production security review, final treasury governance, and independent smart-contract audit appropriate to the value at risk.
