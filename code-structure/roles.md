---
prev:
  text: 'Variables'
  link: '/code-structure/variables'

next:
  text: 'peekl-server'
  link: '/references/peekl-server'
---

# Roles

In the context of Peekl, a roles can be described as a set of resources, variables, and templates, that you most likely want to reuse. For example you can use a roles to install and configure nginx.

Declaring a role is a simple as creating a folder with the role name inside of the `roles` folder. And in this folder a file                                                                 `main.yml` should exist. Here's an example of what it would look like for a role called `nginx`. And

```bash
/etc/peekl/code
└── production
    └─ roles
       └── nginx
           └─ main.yml
```

The content of the `main.yml` will look like this.

```yaml
resources: []
includes: []
```

- `resources`: Is for declaring a set of resources, like you would do inside of a node, or a group.
- `includes`: Is for importing other YAML files inside of the folder directory.

Here's an example of what a complete `main.yml` file would look like.

```yaml
resources:
  - title: "Install Nginx"
    type: "builtin.pkg"
    parameters:
      names: ["nginx"]

includes:
  - name: "configure"
```

For the includes to work, a file called `configure.yml` would have to exist beside the `main.yml` file. The content of this file is just a list of resources.

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
  when: "configure_nginx == updated"
```

## Variables

If you want to have variables at the roles level, this is possible by creating a `variables` at the root of the role, and creating any `.yml` in it, like so.

```bash
/etc/peekl/code
└── production
    └─ roles
       └── nginx
           ├── main.yml
           └── variables
               └── vars.yml
```

And the content of the `.yml` can be anything.

## Templates

Inside of roles you'll be able to make use of templates. Templates allow you to create more "dynamic" files on nodes, that can evolve based on variables you provide.

Creating templates inside of role is done by creating a folder called `templates`, and creating the template files inside. Template files should all be named `*.tmpl`, otherwise they won't get imported.

```bash
/etc/peekl/code
└── production
    └─ roles
       └── nginx
           ├── main.yml
           └── templates
               └── nginx.conf.tmpl
```

And then inside of the role you can use them like so.

```yaml
- title: "configure_nginx"
  type: "builtin.template"
  parameters:
    name: "nginx.conf"
    path: "/etc/nginx/nginx.conf"
  register: "configure_nginx"
```
