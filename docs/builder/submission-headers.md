---
title: Submission Headers
sidebar_position: 3
---

# Submission Headers

We supports HTTP headers on the `submitBlock` endpoint (`POST /relay/v1/builder/blocks`) per the helix sourcecode. 

## Encoding and Compression

Standard HTTP headers control payload format:

| Header | Values | Description |
|--------|--------|-------------|
| `Content-Type` | `application/json`, `application/octet-stream` | JSON or SSZ encoding. SSZ is recommended. |
| `Content-Encoding` | `gzip`, `zstd` | Compress the payload body. `zstd` is preferred for better compression ratio and speed. |

## Custom Headers

| Header | Values | Description |
|--------|--------|-------------|
| `x-api-key` | API key string | Authenticate with a registered API key. Skips BLS signature verification for known builders, reducing processing latency. |
| `x-submission-type` | `default`, `dehydrated` | Specifies the submission type. `dehydrated` enables [block delta](./blockdeltas) submissions. |
| `x-sequence` | Integer | Sequence number for all submissions. Used to reject stale submissions and for cancellations. |
| `x-hydrate` | Any value | When present, instructs the relay to return the hydrated (full) block in the response after applying deltas. Useful for debugging dehydrated submissions. |

## API Keys

API keys are issued per builder public key. A valid `x-api-key` header allows:

- Skipping BLS signature verification (lower latency)
- Access to block delta submissions on mainnet
- Access to builder-direct endpoints (where available)

Contact us to request an API key.
