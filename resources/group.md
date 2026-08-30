---
prev:
  text: 'File'
  link: '/resources/file'

next:
  text: 'Pkg'
  link: '/resources/pkg'
---

# Group

The `builtin.group` is a resource that allows you to either create or delete a group.

## Parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- |---- |
| `name` | The name of the group to manage | `true` | |

## Examples

Create a group named potato

```yaml
- title: "Create group potato"
  type: "builtin.group"
  present: true
  parameters:
    name: "potato"
```

Delete a group named potato

```yaml
- title: "Delete group potato"
  type: "builtin.group"
  present: false
  parameters:
    name: "potato"
```
