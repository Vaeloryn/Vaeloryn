---
name: Etherscan v2 hardhat-verify config
description: How to configure @nomicfoundation/hardhat-verify for Etherscan API v2 (single unified key, chainid auto-injected).
---

## Rule
Set `etherscan.apiKey` as a **plain string**, not a network-keyed object.

```js
etherscan: {
  apiKey: process.env.BASESCAN_API_KEY || ""
}
```

**Why:** hardhat-verify checks `typeof apiKey === "string"` to toggle `isV2`. When `isV2 = true` the plugin:
- Overrides the apiURL to `https://api.etherscan.io/v2/api` regardless of any customChains entry.
- Appends `chainid=<chainId>` to every GET query string and every POST body automatically.

When `apiKey` is an object (network → key map), `isV2 = false`. The plugin uses the per-chain API URL but never injects `chainid`, so every v2-required request fails with "Missing chainid parameter."

**How to apply:** Any time a new chain needs Etherscan v2 verification in this project, use a single string key in `etherscan.apiKey`. No `customChains` entry is needed for chains already in hardhat-verify's built-in list (e.g. `baseSepolia`, chainId 84532). Add `customChains` only to supply a custom `browserURL`.
