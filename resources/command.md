---
prev:
  text: builtin.debug
  link: resources/debug

next:
  text: Inventory
  link: code-structure/inventory
---

# Command

The `builtin.command` resource allows you to run shell commands using Peekl.

## Resource parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `command` | Command to run. | `true` | |
| `args` | List of arguments to use in the command. | `false` | `[]` |
| `creates` | Path to a file that the command create to make it idempotent. | `false` | |
| `register_output` | Variables to which to register the output (stdout) of the command. | `false` |
| `shell` | The shell to use to run the command. _Only support `bash` for now_ | `false` | `bash` |

## Examples

Run command that output 'hello' to file, and creates the file so that it doesn't run again.

```yaml
- title: "Output 'hello' to file"
  type: "builtin.command"
  data:
    command: "echo hello > /tmp/hello_file"
    creates: "/tmp/hello_file"
```

