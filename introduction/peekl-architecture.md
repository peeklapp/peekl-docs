---
prev:
  text: What is Peekl
  link: /introduction/what-is-peekl

next:
  text: Setting up the server
  link: /getting-started/setting-up-the-server
---

# Peekl architecture

Peekl is deliberately split into three small, single-purpose components instead of one monolithic application: **`peekl-server`**, **`peekl-agent`**, and **`peekl-code`**. Each one does exactly one job.

```
Git repo (inventory / roles / variables)
        │
        │  peekl-code sync
        ▼
┌───────────────────┐        mTLS catalog request       ┌─────────────────┐
│                   │ ◄──────────────────────────────── │                 │
│   peekl-server    │                                   │   peekl-agent   │
│                   │ ─────────────────────────────────►│                 │
└───────────────────┘        compiled catalog           └─────────────────┘
```

## `peekl-server`

The server is the central piece each nodes interacts with. It has multiples roles that are describe in the following table.

| Role | Description |
|---|---|
| **Certificate authority** | The server bootstraps its own CA on first start, and every agent authenticates using a certificate signed by that CA. There is no shared secret or static API key involved in ongoing communication as every request is mutual TLS. |
| **Token based enrollment** | New nodes are onboarded through short-lived, single-use, IP-bound enrollment tokens. The agent uses the token once to submit a certificate signing request and receive back a signed certificate, after which the token is then immediately invalidated. Certificates can later be revoked which is also how a node is safely re-enrolled. |
| **Serve code** | The server never talks to Git directly. It simply reads whatever `peekl-code` has most recently published to a local folder (`/etc/peekl/code` by default), which keeps the server's job simple: authenticate and authorize nodes, then serve code. |

## `peekl-agent`

The agent is the only component installed on every managed node. It runs as a systemd service, and will regurarly ask the server for the latest version of code.

It works as follow :

1. Authenticates to the server over mTLS using its enrolled certificate.
2. Requests its catalog for its configured **environment** (see below).
3. Applies the catalog's resources locally, such as creating or removing files and directories, rendering templates, and more.

Because the agent pulls it's code from the server on a regular basis, it handles drift in configuration automatically, without anyone having to be actively deploying.

## `peekl-code`

The role of `peekl-code` is too make the bridge between the control repository and the server.

It works as follow :

- `peekl-code sync --environment <name>` clones the branch matching `<name>` from your repository, packages `inventory/groups`, `roles`, and `variables/groups` into a `zstd`-compressed archive, packages one additional archive per node under `inventory/nodes`, and publishes the  result as a new, immutable, numbered version. A `latest` marker is then atomically updated to point agents at it — so a sync takes effect immediately, with zero restarts required anywhere.
- `peekl-code clean` removes any old versions, keeping only the most recent N (default 5) per environment.
- `peekl-code delete --environment <name>` removes an environment entirely from the local code folder (with a safety flag protecting `production` from accidental deletion).

Each **environment** (e.g. `production`, `staging`) corresponds to exactly one branch of your configuration repository, and is published to its own subfolder on the server. Agents are pinned to a single environment via their local `agent.yml`, which means promoting a change from staging to production is a normal Git operation of merging code to the `production` branch, and run `peekl-code sync --environment production`. Your agents should then be able to keep the new version of the code, and applys it.
