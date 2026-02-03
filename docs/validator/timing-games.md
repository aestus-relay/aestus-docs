---
title: Timing Games
---

# Timing Games

The Aestus relay, like most others, engages in *relay-side timing games*. We identify getHeader submissions from proposers, and delay our response based on calculations of network latency and proposer preferences. We try to configure our delay to be safe and conservative, while still leaving time for more profitable blocks to come in from builders.

## Configuration Parameters

For proposers who want more control over delay behavior, consider adjusting the following parameters:

### `headerDelay` Query Parameter

This parameter is measured in milliseconds since the start of the proposal slot. The relay will attempt to time its delay so that the proposer **receives the block bid response** no later than this point in time. Setting a `headerDelay=500`, where the relay estimates a one-way latency of 100 ms, means the relay will query the top bid at ~400 ms into the slot, minus a safety threshold, so that the response reaches the proposer on time.

This is a *URL query parameter*. `mev-boost` clients may customize this in thir config by modifying the relay URL, e.g.:

```https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live?headerDelay=500```

For `commit-boost` clients:

```[[relays]]
url = "https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live"

[relays.get_params]
headerDelay = "500"
```

### `X-Timeout-Ms` Header

The Aestus relay respects `X-Timeout-Ms` headers when performing a delay. This is especially useful when combined with the `X-MEVBoost-StartTimeUnixMS` header. All major MEV-Boost sidecars today should provide these by default.

Modifying `X-Timeout-Ms` can lead to issues if done incorrectly, be careful. Proposers confident with node configuration may be interested in configuring this for unusually-long delays.
