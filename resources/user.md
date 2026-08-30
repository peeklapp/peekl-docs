---
prev:
  text: 'Systemd Service'
  link: '/resources/systemd-service'

next:
  text: 'Template'
  link: '/resources/template'
---

# User

The `builtin.user` resource allow to manage everything related to a user, from the shell that it should have, to the creation and deletion of the user, and groups membership.

## Parameters

| Name | Description | Required | Default |
| ---- | ----------- | -------- | ------- |
| `username` | Name of the user to manage | `true` ||
| `groups` | List of groups the user should be a member of. _None of those group will get created, make sure to create them using the `builtin.group`._ | `false` ||
| `manage_home` | Whether or not to manage the home directory of the user. _The home of the user will never gets deleted using this value, only created if it doesn't exist_ | `false` | `true` |
| `shell` | Shell that the user should get assigned | `false` | `/bin/bash` |

## Examples

Create a user named `jeff`

```yaml
- title: "Create user jeff"
  type: "builtin.user"
  parameters:
    username: "jeff"
```

Delete user named `jeff`

```yaml
- title: "Delete user jeff"
  type: "builtin.user"
  present: false
  parameters:
    username: "jeff"
```
