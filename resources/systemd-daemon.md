---
prev:
  text: Pkg
  link: resources/pkg

next:
  text: Systemd Service
  link: resources/systemd-service
---

# Systemd Daemon

The `builtin.systemd_daemon` resource allows you to easily reload the systemd daemon, when you modify or add a new `.service` unit file.

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `reload` | Whether or not to reload systemd daemon | `false` | `true` |

## Examples

Relod systemd daemon

```yaml
- title: "Reload systemd daemon"
  type: "builtin.systemd_daemon"
  present: true
  data:
    reload: true
```
