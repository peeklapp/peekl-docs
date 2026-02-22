---
prev:
  text: User
  link: resources/user

next:
  text: File
  link: resources/file
---

# Group

The `builtin.group` is a resource that allows you to either create or delete a group.

::: info
Membership of group is done through the resource of type `builtin.user` and not through the `builtin.group` type.
:::

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- |---- |
| `name` | The name of the group to manage | `true` | |

## Examples

Create a group named potato

```yaml
- title: "Create group potato"
  type: "builtin.group"
  present: true
  data:
    name: "potato"
```

Delete a group named potato

```yaml
- title: "Delete group potato"
  type: "builtin.group"
  present: false
  data:
    name: "potato"
```
