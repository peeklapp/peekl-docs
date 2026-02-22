---
prev:
  text: builtin.systemd_service
  link: resources/systemd-service

next:
  text: builtin.command
  link: resources/command
---

# Debug

The `builtin.debug` allows you to print debug messages during run of the agent.

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `message` | The message you want to print. Is compatible with template syntax, and can make use of variables | `true` | |

## Examples

Simply output 'Jeff'

```yaml
- title: "Say 'Jeff'"
  type: "builtin.debug"
  data:
    message: "Jeff"
```

Output all the facts

```yaml
- title: "Output all variables"
  type: "builtin.debug"
  data:
    username: "{{ . }}"
```

