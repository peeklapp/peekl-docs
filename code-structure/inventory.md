---
prev:
  text: builtin.command
  link: /resources/command

next:
  text: Variables
  link: /code-structure/variables
---

# Inventory

In Peekl, the inventory leaves inside of the `inventory` folder, within the `code` folder.

```bash
/etc/peekl/code
└── production
    └─ inventory
       ├── groups
       └── nodes
```

In the inventory you'll be able to define two different things : 
- nodes: The actual agent, the server you want to manage.
- groups: A group of which an agent, or multiple ones, can be a member of.

## Nodes

When you want to declare a node in the inventory, you should create a `.yml` file with the same name as the certname in the `inventory/nodes` folder.

For example is the name of the node is `agent`, then the file to create would be `agent.yml`.

Here's a look at what an empty file would look like.

```yaml
name: "agent"
roles: []
resources: []
groups: []
tags: []
```

| Field name | Description |
|---|---|
| `name` | The name of the node. |
| `roles` | A list of roles that should apply to this node, as string. Those roles should exist under the `roles` folder. |
| `resources` | A list of [resources](/resources) that you want to be applied to the node. |
| `groups` | A list of groups the node is a member of, as string. |
| `tags` | A list of tags that can be used during deployment as a variable, as string. |

Here's an example of what a complete file would look like. In this case this is a webserver, so he's a member of the `web` group, and `tags` are sent to identify which of our applications should be deployed onto it.

```yaml
name: "agent"
roles: []
resources: []
groups:
  - "web"
tags:
  - "website_peekl_dev"
  - "website_docs_peekl_dev"
```

## Groups

Any group that we create will live under the `groups` folder of the inventory. Groups are used to group similar roles or resources on a certain number of servers.

For example if you have multiple webservers, you don't really want to write everything from scratch again. With group you can write it once, and apply to multiple nodes.

Just like for the nodes, the group file should be a `.yml` file with the name of the group. So for a group called `web` the file would be `web.yml`.

```yaml
name: "web"
roles: []
resources: []
tags: []
```

| Field name | Description |
|---|---|
| `name` | The name of the group. |
| `roles` | A list of roles that should apply to this group, as string. Those roles should exist under the `roles` folder. |
| `resources` | A list of [resources](/resources) that you want to be applied to the group. |
| `tags` | A list of tags that should apply to this group, as string. |

Here's an example of a group file for our `web` group, where we actually install nginx, and make sure to deploy our application.

```yaml
name: "web"
roles:
  - "nginx"
resources: []
tags:
  - "webserver"
```
