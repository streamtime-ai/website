---
date: 2025-06-30
title: Direct Cluster Access and Endpoint Routing
categories:
  - platform-features
author_staff_member: p6
---

Direct cluster access lets you securely expose Kafka endpoints for clients without tunneling, jumpboxes, or custom DNS setups.

![Kafka Network](https://source.unsplash.com/random/1500x1145)

## What is Direct Cluster Access?

It provides an out-of-the-box way to connect Kafka clients (like producers and consumers) directly to a deployed cluster from external VPCs or the internet, based on your configuration.

This means:
- DNS resolution just works (`bootstrap.cluster.yourdomain.com`)
- No need to manage custom DNS zones or ALB listener rules
- Works with both internal and external modes

## Use Cases

- Connecting external Flink or Spark apps
- Streaming from edge devices
- Accessing Kafka from hybrid cloud apps

## Network Isolation Modes

| Mode      | Description                            |
|-----------|----------------------------------------|
| internal  | Only within the same VPC or peered VPC |
| external  | Public-facing access via internet      |

You can toggle this in the advanced configuration during cluster creation.

![Access Modes](https://source.unsplash.com/random/1500x1146)

## How It Works

Under the hood, the platform:
- Provisions a secure LoadBalancer
- Assigns DNS via the control plane
- Configures listener rules and port mappings

All without needing a separate ingress controller or custom network policy.

## Recommendations

- Always use TLS encryption.
- Rotate bootstrap endpoints during auto-upgrades.
- Monitor access logs via the diagnostics tab.

![TLS Setup](https://source.unsplash.com/random/1500x1147)
