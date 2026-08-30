---
prev:
  text: 'Writing your first catalog'
  link: '/getting-started/writing-your-first-catalog'

next:
  text: 'Command'
  link: '/resources/command'
---

# Resources basics

In Peekl, we call resources the things you "manage". For example when you declare a user inside of a tasks file, or a role, you create a "resource" of type user. And so on for the other types that exist.


## Resources common fields

All the existing builtin resources in Peekl have common fields that will help you define them. The following list details all of them.

### `title`

The title field allows you to uniquely name a resource. There is no rule about the formatting, but using snake case is the recommended way to go.

### `type`

The type determine what kind of resource you're declaring. Accepted values are currently only `builtin.*`.

### `present`

Whether the resource should be present or no. For example for a file, if set to `true` then the file will actively be created and at every run the agent would make sure that it exist. If set to `false` then it would delete the file. For each `builtin.*` resource, the behavior of this file will be explained in details, but should mostly be self-explanatory. 

The default value for this field is `true`.

### `parameters`

The parameters of the resource. The content of this field depends of the type of resource. Refer to the documentation of each resource type to learn more.

### `register`

A variable name to register the result of the resource execution to. Result can either be `created`, `deleted`, `updated` or `unchanged`. It's useful to perform certain action on conditions, and should be paired with the `when` field.

### `when`

This field allows you to conditionally process resources. For example you could say that you'd want this resource to run only for Debian 12, or if you need to reload nginx after a configuration change.

```yaml
- title: "configure_nginx"
  type: "builtin.template"
  parameters:
    name: "nginx.conf"
    path: "/etc/nginx/nginx.conf"
  register: "configure_nginx"

- title: "reload_nginx"
  type: "builtin.systemd_service"
  parameters:
    name: "nginx.service"
    state: "reloaded"
  when: "configure_nginx == 'updated'"
```

## Builtin resources

| Name | Description |
| ---- | ----------- |
| [`builtin.command`](/resources/command) | Run shell commands |
| [`builtin.cron`](/resources/cron) | Create and manage crontab |
| [`builtin.debug`](/resources/debug) | Write debug messages to logs when running the agent |
| [`builtin.directory`](/resources/directory) | Create folders, delete them, manage their owner and permissions |
| [`builtin.file`](/resources/file) | Create files, set content, delete them, manage their owner and permissions |
| [`builtin.group`](/resources/group) | Create group or suppress one |
| [`builtin.pkg`](/resources/pkg) | Install or remove packages, enforce version of packages |
| [`builtin.systemd_daemon`](/resources/systemd-daemon) | Manage systemd daemon, such as reloading it when you add a .service unit file |
| [`builtin.systemd_service`](/resources/systemd-service) | Manage a systemd service, such as restarting it, starting it or stopping it |
| [`builtin.user`](/resources/user) | Create user, set shell and delete users |
| [`builtin.template`](/resources/template) | Use templates to render static file with provided variables |


## About custom resources

One question that will quickly comes to your mind is if you can create your own custom resources, on top of the builtin one. There are plans to work on given Peekl expanded dynamic capabilities through the use of `plugins` but as of now this is not supported. However it's important to note that the builtin resources are already plenty for day-to-day operations. If you think that a new builtin might be relevant for you and other users, feel free to open an issue on Github.
