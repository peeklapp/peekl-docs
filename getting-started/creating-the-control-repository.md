---
prev:
  text: 'Setting up the syncing tool'
  link: '/getting-started/setting-up-the-syncing-tool'

next:
  text: 'Resource basics'
  link: '/resources/resources-basics'
---

# Creating the control repository

When working with Peekl, you will mainly interact with it through the control repository. This control repository is where you will declare the state of your nodes, the roles for reusable code, and the variables.

## Create a repository

The first step is so create a repository on your code platform that you're using. The following resources will help you set-up a repository.

- **Gitlab** : [Create a blank project](https://docs.gitlab.com/user/project/#create-a-blank-project)
- **Github** : [Create a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

::: info
For the purpose of this documentation, we assume that your repository is fully empty. Do not initialize it with a README or a license file, we will take care of that later.
::: 

## Repository initialization

Peekl only supports Git repository. The following command will get you started. Remember that each environment is a branch in your control repository, and that the default environment is called `production`, that's why we initialize the repository with branch `production`.

Create a folder and initialize it using git.
```bash
mkdir peekl-control-repository && cd peekl-control-repository && git init --initial-branch=production
```

Add a small README file with content, and create a commit.
```bash
echo "# peekl-control-repository" > README.md
git add .
git commit -m "feat: initial commit"
```

Finally add the remote and push.

```bash
git remote add origin git@github.com:peeklapp/peekl-demo.git
git push -u origin production
```

## Add basic code structure to repository

In a Peekl repository you will find three folders : 

- `inventory` : Contains two sub directories, `nodes` and `groups`, in which you'll declare details about them.
- `variables` : Contains two sub directories, `nodes` and `groups`, in which you'll have folders where the name corresponds to the nodes and groups of your inventory.
- `roles` : Contains the roles that you want to get applied to your infrastructure.

The following command would create the appropriate structure.

```bash
mkdir -p {inventory,variables}/{groups,nodes}
mkdir roles
```

You would end up with the following structure.

```bash
.
├── inventory
│   ├── groups
│   └── nodes
├── roles
└── variables
    ├── groups
    └── nodes
```

## Add a node in the inventory

Adding a node in the inventory is done by creating a YAML file under the `inventory/nodes` folder. The name of this file is very important, annd is composed of the hostname of the node, with the `.yml` extension. If the hostname of the node is `agent`, then the filename would be `agent.yml`.

The following snippet shows you what the node inventory file looks like.

```yaml
roles: []
groups: []
tags: []
resources: []
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| `roles` | list of string | A list of roles that should be applied to node |
| `groups` | list of string | A list of groups the node is a member |
| `tags` | list of string | A list of tags |
| `resources` | list of resources | A list of resources to be applied to the node |

The following snippet shows how to declares resources in an inventory node entry. In this example we create a file and install a few packages.

```yaml
roles: []
groups: []
tags: []
resources:
  - name: "Create an hello world file"
    type: "builtin.file"
    parameters:
      path: "/root/hello_world"
      content: "Hello, world!"

  - name: "Install packages"
    type: "builtin.pkg"
    parameters:
      names:
        - nginx
        - htop
        - ncdu
        - zsh
```

## Add a group in the inventory

Adding a new group is very similar to adding a new node. The only difference are the location, as the file should be present in the `inventory/groups` folder, and the naming of the file which should be the group name with the `.yml` extension. Content of the file is very similar to the declaration of a node.

```yaml
roles: []
tags: []
resources: []
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| `roles` | list of string | A list of roles that should be applied to group members |
| `tags` | list of string | A list of tags |
| `resources` | list of resources | A list of resources to applied to group members |

## Create your first role

Roles in Peekl are highly similar to what you might expect from Puppet, where they're called modules, or Ansible, where they're also code roles. Just like for other solutions, those are reusable bits of codes.

Creating a new role is done by creating a folder within the `roles/` directory. The name of this folder determines the name of the role. Then within that folder, you'll create subfolders.

The following commands gives you an idea of all the required directories for a role, for a role called `nginx`.

```bash
mkdir -p roles/nginx/{variables,files,templates}
```

| Name | Description |
| ---- | ----------- |
| `variables` | This folder is supposed to contains an unlimited number of `*.yml` files that are use as "default" variables for the role |
| `files` | This folder will contain any file that you want to use with the `builtin.file` resource |
| `templates` | This folder will contain any template that you want to use with the `builtin.template` resource |

Within a role, it is mandatory to create a file called `main.yml`. This file will be the entrypoint for the role. The following code snippet shows you what a role file should contain.

```yaml
resources: []
includes: []
depends_on: []
```

| Name | Type | Description |
| ---- | ---- | ----------- |
| `resources` | list of resources | A list of resources that should be applied for the role |
| `includes` | list of string | Name of files, as `*.yml`, to be include as extra when calling the role. This is used for splitting import roles in mulitple parts |
| `depends_on` | list of string | Name of roles this role should depends on. This is not an implicit import, roles still needs to be applied to roles in order to work |


## Syncing control repository on server

The last step to make sure that this code is made available on the server, is to make use of the `peekl-code` tool. Make sure to follow the steps of the guide ([Setting up the syncing tool](/getting-started/setting-up-the-syncing-tool)) in order to properly set-it up.

Once you've committed your changes on the control repository, just run the following command on the server.

```bash
peekl-code sync
```

The code should now be available to your nodes for pick up. If you wanted to sync a different environment, the following command shows you how to do that. In this example we sync the `add-nginx` environment.

```bash
peekl-code sync -e add-nginx
```
