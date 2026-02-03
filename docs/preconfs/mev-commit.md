---
title: Primev Mev-Commit
---

# Mev-Commit

The Aestus relay supports [Primev's](https://www.primev.xyz/) [mev-commit](https://docs.primev.xyz/v1.2.x/concepts/mev-commit-intro/what-is-mev-commit) preconfirmation system.

## Proposers

Refer to [Primev's documentation](https://docs.primev.xyz/v1.2.x/get-started/validators/validator-guide) for requirements. You must only use opted-in relays like Aestus.

Aestus will automatically query the mev-commit registries for your registration, no direct action needed.

## Builders

When a proposer is registered with mev-commit, the Aestus relay will only accept blocks from builders ("providers") also registered with mev-commit. Refer to [Primev documentation](https://docs.primev.xyz/v1.2.x/get-started/providers/registering-a-provider). Blocks from unregistered builders will be rejected.

The `/relay/v1/builder/validators` endpoint returns an `is_mev_commit` boolean field for each upcoming slot with a registered proposer. When `true`, only blocks from registered builders will be accepted by the relay.