---
prev:
  text: Group
  link: resources/group

next:
  text: Directory
  link: resources/directory
---

# File

The file resource allows you to create or delete a file, and to set content inside of a file.

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ----|
| `path` | Path to the file you want to manage | `true` | |
| `owner` | Set owner of the file | `false` | `root` |
| `group` | Set group of the file | `false` | `root` |
| `mode` | Set mode of the file | `false` | `0755` |
| `content` | Set content of the file | `false` | |

## Examples

Create a file at path `/tmp/hello_world` with content `Hello, world!`

```yaml
- title: "Create file /tmp/hello_world"
  type: "builtin.file"
  present: true
  data:
    path: "/tmp/hello_world"
    content: "Hello, world!"
```

Delete a file at path `/tmp/delete_me`

```yaml
- title: "Delete file /tmp/delete_me"
  type: "builtin.file"
  present: false
  data:
    path: "/tmp/delete_me"
```
