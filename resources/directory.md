---
prev:
  text: 'Debug'
  link: '/resources/debug'

next:
  text: 'File'
  link: '/resources/file'
---

# Directory

The `builtin.directory` resource allows you to manage a directory, either creating or deleting it, and setting permissions.

## Parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `path` | Path to the directory you want to manage | `true` | |
| `owner` | Set owner of the directory | `false` | `root` |
| `group` | Set group of the directory | `false` | `root` |
| `mode` | Set permissions of the directory | `false` | `0644` |
| `force_delete` | Force the deletion of the directory, even if it's not empty | `false` | `false` |

## Examples

Create a directory at path `/tmp/my_directory`

```yaml
- title: "Create directory /tmp/my_directory"
  type: "builtin.directory"
  present: true
  parameters:
    path: "/tmp/my_directory"
```

Force deletion of a directory at path `/tmp/my_directory_to_delete`

```yaml
- title: "Force delete directory `/tmp/my_directory_to_delete`"
  type: "builtin.directory"
  present: false
  parameters:
    path: "/tmp/my_directory_to_delete"
    force_delete: true
```
