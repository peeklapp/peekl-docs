---
prev:
  text: 'User'
  link: '/resources/user'

next:
  text: 'Inventory'
  link: '/code-structure/inventory'
---

# Template

The `builtin.template` resource allows you to create file on node with dynamic content defined by variables that you set, or using facts.

## Writing a template

Templates in Peekl are made possible using the official Golang templates engines. It's a little bit more tricky that other templates file format such as Jinja2 or ERB. Here are a few example so that you get an overview on what you can do with it. For more advanced use, you should refer yourself to the [official documentation](https://pkg.go.dev/text/template). Digital Ocean' blog also have a [nice article](https://www.digitalocean.com/community/tutorials/how-to-use-templates-in-go) that covers most things that you need to know.

Here's an example on how you can create a simple configuration file with simple values.

```yaml
listen_ip: {{ .listen_ip }}
listen_port: {{ .listen_port }}
daemon: {{ .daemon }}
```

## Builtin variables

On top of variables that you can define in your roles, your inventory, and on direct task invocation, you will also be able to use builtin variables, such as **facts** and **tags**.

## Parameters

| Name | Description | Required | Default |
| ---- | ---- | ---- | ---- |
| `source` | The file from the `templates` folder to use. Cannot be used if the `content` option is used. | `true` | |
| `path` | Path at which to create the file based on the template | `true` | |
| `owner` | Set owner of the file | `false` | `root` |
| `group` | Set group of the file | `false` | `root` |
| `mode` | Set permissions of the file | `false` | `0755` |
| `content` | The content of the template. Cannot be used if the `source` option is used. | `true` | |
| `variables` | A list of variables that you want to pass to the template on top of other pre-existing variables. | `false` | |

## Examples

Create file `/etc/my_app/config` based on the template called `config`

```yaml
- title: "Create configuration for my_app"
  type: "builtin.template"
  present: true
  parameters:
    source: "config"
    path: "/etc/my_app/config"
    variables:
      hello: "world"
```

Create file dummy with a local content

```yaml
- title: "Create dummy file with content"
  type: "builtin.template"
  present: true
  parameters:
    path: "/root/dummy"
    content: |
      {{ .hello }}
    variables:
      hello: "world"
```
