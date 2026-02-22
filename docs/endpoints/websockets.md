---
title: WebSockets
sidebar_position: 3
---

# Top Bid WebSocket Stream

The Aestus relay provides an open, public WebSocket endpoint providing access to a stream of top bid updates suitable for monitoring auction state. Proposers should use the HTTP `getHeader` endpoint to source full block bids.

Top bids are SSZ encoded and compatible with the [Titan Relay specs](https://docs.titanrelay.xyz/builders/builder-integration#websocket-topbid-stream).

## Addresses

### Mainnet

- Global (geo-steered): `wss://mainnet.aestus.live/relay/v1/builder/top_bid`
- Europe: `wss://eu.aestus.live/relay/v1/builder/top_bid`
- North America: `wss://na.aestus.live/relay/v1/builder/top_bid`

### Hoodi

- Global (geo-steered): `wss://hoodi.aestus.live/relay/v1/builder/top_bid`
- Europe: `wss://eu.hoodi.aestus.live/relay/v1/builder/top_bid`
- North America: `wss://na.hoodi.aestus.live/relay/v1/builder/top_bid`
