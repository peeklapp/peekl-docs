---
prev:
  text: Inventory
  link: /code-structure/inventory

next:
  text: Roles
  link: /code-structure/roles
---

# Variables

Variables can be used within templates, and [`builtin.debug`](/resources/debug) resources, as well as `when` statement. They live under the `variables` folder within the `code` folder, and are mapped to a specific node, or to a group.

```bash
/etc/peekl/code
└── production
    └─ variables
       ├── groups
       └── nodes
```

Under either of the `groups` or `nodes` folder, you'll have to create a folder with the name of the node you want to write variables for, or a folder with the name of the group if it's a group. In those folder, you'll be able to define an unlimited number of `.yml` files.

As an example let's take the node `agent` again. With the following structure, the content of both of the `.yml` file (`secrets.yml` and `applications.yml`) will be loaded as variables.

```bash
/etc/peekl/code
└── production
    └─ variables
       └── nodes
           └─ agent
              ├── secrets.yml
              └── applications.yml
```

In a YAML file you can declare variables like so.

```yaml
my_var: "result"
my_dict:
  key_one: "key_one"
  key_two: "key_two"
my_list:
  - "hello"
  - "bonjour"
  - "hola"
```
