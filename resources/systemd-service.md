---
prev:
  text: Pkg
  link: resources/pkg

next:
  text: Node
  link: resources/debug
---

# Systemd Service

The `builtin.systemd_service` resource allows you to manage the state of a systemd service.

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `name` | The name of the service you want to manage | `true` | |
| `enabled` | Whether or not the service should be enabled | `false` | `true` |
| `masked` | Whether or not the service should be masked | `false` | `false` |
| `state` | The state the service should be | `true` | |

## Examples

Start service `nginx`

```yaml
- title: "Start nginx.service"
  type: "builtin.systemd_service"
  present: true
  data:
    name: "nginx.service"
    state: "started"
```

Stop service `nginx`

```yaml
- title: "Stop nginx.service"
  type: "builtin.systemd_service"
  present: true
  data:
    name: "nginx.service"
    state: "stop"
```

Reload service `nginx`


```yaml
- title: "Reload nginx.service"
  type: "builtin.systemd_service"
  present: true
  data:
    name: "nginx.service"
    state: "reload"
```
