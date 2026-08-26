---
title: WebSockets
sidebar_position: 3
---

# Top Bid WebSocket Stream

The Aestus relay provides an open, public WebSocket endpoint providing access to a stream of top bid updates suitable for monitoring auction state. Proposers should use the HTTP `getHeader` endpoint to source full block bids.

Top bids are SSZ encoded and compatible with the [Titan Relay specs](https://docs.titanrelay.xyz/builders/builder-integration#websocket-topbid-stream). Both endpoints deliver a 188-byte payload. v1 will be deprecated in the near future.

**v1**: milliseconds 
**v2**: nanoseconds

`/ws/v2/top_bid` and `/ws/v2/bids` rewrite to v2. `/` and `/ws/v1/bids` stay on v1.

## Addresses

### Mainnet

- Global (geo-steered): `wss://mainnet.aestus.live/relay/v2/builder/top_bid`
- Europe: `wss://eu.aestus.live/relay/v2/builder/top_bid`
- North America: `wss://na.aestus.live/relay/v2/builder/top_bid`

v1: replace `/relay/v2/` with `/relay/v1/` on the same hosts.

### Hoodi

- Global (geo-steered): `wss://hoodi.aestus.live/relay/v2/builder/top_bid`
- Europe: `wss://eu.hoodi.aestus.live/relay/v2/builder/top_bid`
- North America: `wss://na.hoodi.aestus.live/relay/v2/builder/top_bid`

v1: replace `/relay/v2/` with `/relay/v1/` on the same hosts.
