---
title: Rate Limits
---

# Rate Limits

The Aestus relay enforces rate limits on endpoints with a history of heavy activity. Please get in touch with any questions or feedback.

## getHeader Endpoint

The `/eth/v1/builder/header/{slot}/{parent_hash}/{pubkey}` endpoint is currently being rate limited. Our approach to this is evolving, you can inspect response headers to understand current limits. 

This should allow for heavy bursts during e.g. a validator's proposal window, while constraining heavy sustained monitoring.

We offer a public, open [WebSocket endpoint](./websockets) providing a pushed stream of top bid info. We highly encourage all monitoring activity to watch the ws stream instead of repeatedly hitting the HTTP endpoint.

## submitBlock Endpoint

The `/relay/v1/builder/blocks` endpoint is likely going to have rate limiting applied soon. Blocks are getting bigger these days post Fusaka, and we don't have infinite budget for validation nodes. Please get in contact with questions or concerns.