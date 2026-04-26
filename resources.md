---
prev:
  text: Enrolling the agent
  link: getting-started/enrolling-the-agent

next:
  text: User
  link: resources/user
---

# Resources

In Peekl, we call resources the things you "manage". For example when you declare a user inside of a tasks file, or a role, you create a "resource" of type user. And so on for the other types that exist.

## Builtin resources

Here is the full list of resources that are baked into Peekl.

| Name | Description |
| -- | -- |
| `builtin.user` | Allows you to manage, by creating or suppressing, a user under a Linux environment. Also allows you to change the shell of the user, alongside other things. |
| `builtin.group` | Allows you to manage, by creating or suppressing, a group under a Linux environment. |
| `builtin.file` | Alows you to create a file with a defined content, or not, to delete a file at specific path, or to enforce permissions/ownership. |
| `builtin.directory` | Allows you to create a folder, or to suppress a folder, alongside change the ownership and permissions. |
| `builtin.template` | Allows you to define templates that are then rendered on host using variables that you define, or facts. |
| `builtin.pkg` | Allows you to install or remove packages, as well as enforcing version of packages. |
| `builtin.systemd_daemon` | Allows you to manage systemd daemon, such as reloading it when you add a `.service` unit file. |
| `builtin.systemd_service` | Allows you to manage a systemd service, such as restarting it, making sure that it is started or stopped. |
| `buitlin.debug` | Allows you to write debug messages to logs when running the agent. |
| `builtin.command` | Allows you to shell commands on the server. |

## Can I create custom resources ?

For now this functionality does not exist. However in the future, we plan on adding a plugin mechanism that would allow you to do just that.

## Common fields for resources

All resources share a lot of common fields. We'll go over them together.

### title

The title field allows you to uniquely name a resource. There is no rule about the formatting, but using snake case is nice.

### type

The type determine what kind of resource you're declaring. Accepted values are currently only `builtin.*`.

### present

Whether the resource should be present or no. For example for a file, if set to `true` then the file will actively be created and at every run the agent would make that it exist. If set to `false` then it would delete the file. 

Default is always `true`.

### data

The data of the resource. The content of this field depends of the type of resource. Refer to the documentation of each resource type to learn more.

### register

A variable name to register the result to. Result can either be `created`, `deleted`, `updated` or `unchanged`. It's useful to perform certain action on conditions, paired with the `when` field.

### when

The when field allow to evaluate resources only if required. For example you could say that you'd want this resource to run only for Debian 12, or if you need to reload nginx after a configuration change.

```yaml
- title: "configure_nginx"
  type: "builtin.template"
  data:
    name: "nginx.conf"
    path: "/etc/nginx/nginx.conf"
  register: "configure_nginx"

- title: "reload_nginx"
  type: "builtin.systemd_service"
  data:
    name: "nginx.service"
    state: "reloaded"
  when: "configure_nginx == 'updated'"
```
