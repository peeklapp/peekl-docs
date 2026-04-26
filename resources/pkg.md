---
prev:
  text: Template
  link: resources/template

next:
  text: Systemd Daemon
  link: resources/systemd-daemon
---

# Pkg

The `builtin.pkg` is a resource that allows you to manage packages on a system.

## Specific version

In the `names` field, if you want to specify a specific version for a package, you can do so with the following syntax : `nginx=1.23.3`. Where `1.23.3` is the version you want.

## Resources parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `names` | List of packages that you want to manage | `true` | |
| `provider` | Which package manager to use to install package | `false` | `apt` |

## Examples

Install package nginx

```yaml
- title: "Install nginx"
  type: "builtin.pkg"
  present: true
  data:
    names: ["nginx"]
```

Install version `1.23.3` of nginx


```yaml
- title: "Install nginx"
  type: "builtin.pkg"
  present: true
  data:
    names:
      - "nginx=1.23.3"
```

Remove package nginx

```yaml
- title: "Remove nginx"
  type: "builtin.pkg"
  present: false
  data:
    names: ["nginx"]
```
