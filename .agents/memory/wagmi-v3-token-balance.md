---
name: Wagmi v3 token balances
description: The installed wagmi v3 balance hook is native-currency only; ERC-20 balances need an explicit viem contract read.
---

Use wagmi's balance hook for the chain's native asset. For an ERC-20, call `balanceOf` through the configured viem public client using the token ABI, and keep the read disabled until a real contract address is configured.

**Why:** The installed wagmi v3 `useBalance` parameter type does not accept the older `token` option, so assuming the v2 shape causes a compile failure and can tempt unsafe workarounds.

**How to apply:** When adding token assets, validate the configured address first, read `balanceOf` with the correct chain client, and preserve an empty-address disabled state.