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
| `builtin.systemd_service` | Allows you to manage a systemd service, such as restarting it, making sure that it is started or stopped. |

## Can I create custom resources ?

For now this functionality does not exist. However in the future, we plan on adding a plugin mechanism that would allow you to do just that.
