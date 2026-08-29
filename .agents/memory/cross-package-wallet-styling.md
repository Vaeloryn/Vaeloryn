---
name: Cross-package wallet styling
description: Styling constraints for wallet UI imported from a sibling workspace package.
---

When a wallet surface is bundled into the marketing app from a sibling package, critical responsive layout rules should be scoped in the host app CSS instead of relying only on utility classes in the imported source.

**Why:** The imported source can render without the host package's full utility scan, causing responsive grids and fixed mobile navigation to collapse or appear in the wrong position.

**How to apply:** Keep product-specific styling in the wallet source, but add explicit host-scoped rules for shell positioning, breakpoints, navigation, and other layout invariants; verify at desktop and mobile widths.