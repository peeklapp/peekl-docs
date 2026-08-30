---
prev:
  text: 'Resources basics'
  link: '/resources/resources-basics'

next:
  text: 'Cron'
  link: '/resources/cron'
---

# Command

The `builtin.command` resource allows you to run shell commands using Peekl.

## Parameters

| Name | Description | Required | Default |
| ---- | ----------- | -------- | ------- |
| `command` | Command to run | `true` |  |
| `args` | List of arguments to use with the command | `false` | `[]` |
| `creates` | Path to a file that the command creates to make it idempotent | `false` ||
| `register_output` | Variable to which the command output (`stdout`) should be registered to | `false` ||
| `shell` | The shell to use to run the command | `false` | `bash` |

## Examples

Run command that output `hello` to a file, and creates the file so that it doesn't run again.

```yaml
- title: "Output 'hello' to file"
  type: "builtin.command"
  parameters:
    command: "echo hello > /root/hello_file"
    creates: "/root/hello_file"
```
