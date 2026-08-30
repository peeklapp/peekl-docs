---
prev:
  text: 'Cron'
  link: '/resources/cron'

next:
  text: Directory
  link: '/resources/directory'
---

# Debug

The `builtin.debug` allows you to print debug messages during run of the agent.

## Parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `message` | The message you want to print. Is compatible with template syntax, and can make use of variables | `true` | |

## Examples

Simply output `Jeff`

```yaml
- title: "Say 'Jeff'"
  type: "builtin.debug"
  parameters:
    message: "Jeff"
```

Output all existing variables

```yaml
- title: "Output all variables"
  type: "builtin.debug"
  parameters:
    username: "{{ . }}"
```
