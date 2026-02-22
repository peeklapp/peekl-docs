---
prev:
  text: Enrolling the agent
  link: getting-started/enrolling-the-agent

next:
  text: Group
  link: resources/group
---

# User

The `builtin.user` resource allow to manage everything related to a user, from the shell that it should have, to the creation and deletion of the user, and groups membership.

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `username` | Username of the user to manage. | `true` | |
| `groups` | List of groups the user should be a member of. _None of those group will actually get created, you have to create them yourself._ | `false` | |
| `manage_home` | Whether or not to manage the home directory of the user | `false` | `true` |
| `shell` | The shell that the user should be assigned | `false` | `/bin/bash` |

## Examples

Create a user named `jeff`

```yaml
- title: "Create user jeff"
  type: "builtin.user"
  present: true
  data:
    username: "jeff"
```

Delete a user named `jeff`


```yaml
- title: "Delete user jeff"
  type: "builtin.user"
  present: false
  data:
    username: "jeff"
```

