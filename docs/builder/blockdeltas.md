---
title: Block Deltas
---

# Block Deltas

The Aestus relay supports block delta submissions via *dehydrated blocks* compatible with the [Titan Relay spec](https://docs.titanrelay.xyz/builders/builder-integration#block-deltas). This includes `x-sequence` headers. Builders are highly encourage to adopt this scheme as it reduces top_bid update latency and traffic volumes substantially. 

This is a new feature for Aestus. 
 - On `hoodi` no API key is required. 
 - On `mainnet` an API key is currently required. Please get in touch. We aim to support this permissionless in the near future. 
