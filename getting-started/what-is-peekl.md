---
prev:
  text: Getting started
  link: /

next:
  text: Setting up the server
  link: /getting-started/setting-up-the-server
---

# What is Peekl

Peekl is modern configuration management tool. It's similar to what you could achieve using Ansible, or Puppet for example. The main idea behind Peekl is to solve the issue that those previously mentionned solutions have, and combine the best of both worlds.

While Ansible is built around a "push" model, meaning that you have to actively run hover SSH the execution of playbook, Peekl is natevely built around a passive pull model using an agent, like Puppet.

While Puppet can be quite slow to generate catalog, Peekl is fast, debt-free, and built in a modern language.

As of the time of writing the documentation, Peekl is not on par in term of feature compared to those two solutions, and nowhere near having as big of community as they do. But hopefully, at the time of you reading this, this won't be the case anymore.

## Peekl architecture

Peekl is built around two main components : The server, and the agent.

The server is the brain of the application, it compiles the catalog, by retrieve the inventory about your node, and any roles, or resources that apply to it.

The agent is the muscle, it will perform action on your node where it is deployed, following the compiled catalog that the server compiled.

[![](https://mermaid.ink/img/pako:eNo9kMFuwjAMQH_F-MKlVEnblJID08QO7MBpt6mXiHqlGkmYm6J1iH9fKAKfbMvvWfYF974h1NjTz0BuT2-dadnY2kGM15ZcWKw_iM_EGnYjOGMJuh7mLmJCzlPYGAfvcDBnAjvC3gRz9C283AV3crFYTyYN2-5JzmBLTPMeRj_wg5vVDhNsuWtQBx4oQUtsza3Ey01ZYziQpRp1TBvD3zXW7hqZk3Gf3tsHxn5oD6i_zLGP1XBqTHic9uwyuYZ44wcXUC8LNUlQX_AXtazyVFQik6pQhRRSlQmOt6m0KPNCqUwIuVK5vCb4N60VabVUIoYsS7mSmYg6arrgeXd_8PTn6z-nSHDe?type=png)](https://mermaid.live/edit#pako:eNo9kMFuwjAMQH_F-MKlVEnblJID08QO7MBpt6mXiHqlGkmYm6J1iH9fKAKfbMvvWfYF974h1NjTz0BuT2-dadnY2kGM15ZcWKw_iM_EGnYjOGMJuh7mLmJCzlPYGAfvcDBnAjvC3gRz9C283AV3crFYTyYN2-5JzmBLTPMeRj_wg5vVDhNsuWtQBx4oQUtsza3Ey01ZYziQpRp1TBvD3zXW7hqZk3Gf3tsHxn5oD6i_zLGP1XBqTHic9uwyuYZ44wcXUC8LNUlQX_AXtazyVFQik6pQhRRSlQmOt6m0KPNCqUwIuVK5vCb4N60VabVUIoYsS7mSmYg6arrgeXd_8PTn6z-nSHDe)
