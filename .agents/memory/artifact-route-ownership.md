---
name: Artifact route ownership
description: Why a legacy artifact registration must be moved before its URL can redirect through the root app.
---

A path registered to a separate artifact is handled before the root website, so client-side routing and root-level redirect files cannot reliably take ownership of that path.

**Why:** The legacy wallet path continued serving its old artifact even after the root website implemented a redirect and same-site replacement.

**How to apply:** Before reusing a former artifact path in the root site, move the obsolete artifact's preview path and service path through validated artifact metadata, restart affected workflows, and verify the route through the browser-level preview.