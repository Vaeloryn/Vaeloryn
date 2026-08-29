# VAELORYN WALLET

Institutional wallet frontend for Base Sepolia (chain ID `84532`).

## Run

```bash
pnpm install
pnpm --filter @workspace/vaeloryn-wallet dev
```

## Configure VAELO

The single source of truth is `src/config.ts`. Set `vaeloAddress` to the canonical ERC-20 contract when it is deployed and verified. Until then, the VAELO balance stays at `0.00` and VAELO transfers remain disabled. Do not add a placeholder address.

Wallet connection and signing use wagmi and viem in `src/lib/wallet.ts`. The injected connector supports desktop wallets such as MetaMask and Rabby without custody or a backend.

## iPhone

Host the built app on HTTPS, open it in Safari, tap Share, then choose **Add to Home Screen**. The manifest uses the VAELORYN dark brand canvas and standalone display mode.