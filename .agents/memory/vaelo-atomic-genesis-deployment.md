---
name: VAELO atomic Genesis deployment
description: Why canonical Genesis allocation must be committed atomically rather than trusting recipient-supplied vesting getters.
---

The canonical VAELO deployment topology must create the distribution, token
and founder vesting, then allocate the Genesis supply atomically from a
one-shot factory. The distribution's allocator must be bound to that immutable
factory.

**Why:** A permissionless allocation call that accepts a vesting address based
only on public getters can be front-run by a look-alike contract that reports
the expected token and 100M allocation while retaining unrestricted withdrawal
behavior. A fake token can also consume a loose one-time allocator gate.

**How to apply:** Preserve the one-shot constructor factory and its
factory-only allocation guard. Any future change to Genesis ordering, recipient
binding or allocation access must retain atomic commitment and add an adversarial
substitution regression test.