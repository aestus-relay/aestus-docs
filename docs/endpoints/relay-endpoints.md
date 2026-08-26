---
title: Relay Endpoints
sidebar_position: 1
---

# Relay Endpoints

The Aestus relay runs multi-region deployments for both `mainnet` and `hoodi`. Traffic is geo-steered to the nearest relay instance to minimise latency for proposers and builders.

## Mainnet

| Endpoint | Description |
|----------|-------------|
| `https://aestus.live` | Primary endpoint (geo-steered) |
| `https://eu.aestus.live` | Europe (OVH London, UK) |
| `https://na.aestus.live` | North America (OVH Beauharnois, Canada) |

**Relay URL:**
```
https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@aestus.live
```

**Filtering (OFAC) URL:**
```
https://0xa15b52576bcbf1072f4a011c0f99f9fb6c66f3e1ff321f11f461d15e31b1cb359caa092c71bbded0bae5b5ea401aab7e@filter.aestus.live
```

### Geo-steering

`aestus.live` uses DNS-based geo-steering to route traffic to the nearest region:

Each region runs independent auction instances.

### Builder direct endpoints

We also provide dedicated paths that bypass load balancing. These require an API key. Contact us if you are interested in helping to test these features.

## Hoodi (Testnet)

| Endpoint | Description |
|----------|-------------|
| `https://hoodi.aestus.live` | Primary endpoint (geo-steered) |
| `https://eu.hoodi.aestus.live` | Europe (OVH London, UK) |
| `https://na.hoodi.aestus.live` | North America (OVH Beauharnois, Canada) |

**Proposer relay entry:**
```
https://0x98f0ef62f00780cf8eb06701a7d22725b9437d4768bb19b363e882ae87129945ec206ec2dc16933f31d983f8225772b6@hoodi.aestus.live
```

**Filtered relay URL (OFAC / Helix regional):**
```
https://0x98f0ef62f00780cf8eb06701a7d22725b9437d4768bb19b363e882ae87129945ec206ec2dc16933f31d983f8225772b6@filter.hoodi.aestus.live
```

Use this URL **or** `hoodi.aestus.live`, not both. The filtered URL registers the validator with regional (OFAC) preferences on the same auction. Switching from the unfiltered URL can take up to an hour to take effect.

## WebSocket Streams

Top bid WebSocket streams are available per-region and with geo-steering:

| Network | Endpoint |
|---------|----------|
| Mainnet | `wss://mainnet.aestus.live/relay/v2/builder/top_bid` |
| Hoodi | `wss://hoodi.aestus.live/relay/v2/builder/top_bid` |

See [WebSockets](./websockets) for details on the stream format.
