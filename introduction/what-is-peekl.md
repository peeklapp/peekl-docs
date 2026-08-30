---
next:
  text: Peekl architecture
  link: /introduction/peekl-architecture
---

# What is Peekl?

Peekl is a modern configuration management tool. It fills the same role as Ansible or Puppet but is built from the ground up around a simpler, faster, and more opinionated design.

## Peekl vs the world

Peekl is not the only configuration management solution out there. The two main alternatives are **Ansible** and **Puppet**. Here's a small overview of how the two solutions compares to one another.

- **Ansible** is simple to use and get started with as well as being agentless, but relies on a "push" model over SSH. Someone (or some CI job) has to actively trigger a run, and that run scales linearly with the number of hosts you're pushing to.
- **Puppet** solves this issue with a pull-based agent, but catalog compilation can be slow, and the platform carries a lot of historical weight.

Peekl combines the two ideas: a **pull-based agent**, like Puppet, so every node is responsible for fetching and applying its own configuration, and a simple method of declaration.

The result is a tool that is both easy to operate and fast enough to stay out of your way as your infrastructure grows.

## Built to scale, built to be fast

Peekl architecture is built so that no bottleneck exist. Compared to other solution such as Puppet, the server does as little as possible, so that it scales correctly.

The goal is that whether you have ten nodes in our infrastructure, or a thousand, it should never slow down.

Some of the things that makes Peekl efficient and fast :
- Code is synced and distributed as `zstd`-compressed archives, keeping publish and fetch operations lightweight even as your inventory, roles, and variables grow.
- The server's storage backend is a standard SQL database, so it scales the same way the rest of your infrastructure does.
- Catalog compilation and resource application are handled by compiled Go code rather than an interpreted DSL, which is what keeps per-node runs fast even as the number of managed nodes increases.
