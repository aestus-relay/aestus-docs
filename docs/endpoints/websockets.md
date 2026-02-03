---
title: WebSockets
---

# Top Bid WebSocket Stream

The Aestus relay provides an open, public WebSocket endpoint providing access to a stream of top bid updates suitable for monitoring auction state. Proposers should use the HTTP `getHeader` endpoint to source full block bids.

Top bids are SSZ encoded and compatible with the [Titan Relay specs](https://docs.titanrelay.xyz/builders/builder-integration#websocket-topbid-stream).

## Addresses

- Mainnet: `wss://mainnet.aestus.live/relay/v1/builder/top_bid`
- Hoodi: `wss://hoodi.aestus.live/relay/v1/builder/top_bid`
