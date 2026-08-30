---
prev:
  text: 'peekl-agent'
  link: '/references/peekl-agent'
---

# peekl-code

## CLI Reference

```bash
peekl-code is used to sync the code base of Peekl with distant.

Usage:
  peekl-code [flags]
  peekl-code [command]

Available Commands:
  clean       Remove any stale repository from staging folder
  completion  Generate the autocompletion script for the specified shell
  delete      Delete an enviroment locally
  help        Help about any command
  sync        Sync an enviroment from remote repository

Flags:
  -c, --config string   Configuration file to use for peekl-code (default "/etc/peekl/config/code.yml")
  -h, --help            help for peekl-code
      --verbose         Enable verbose (debug) output

Use "peekl-code [command] --help" for more information about a command.
```

## Configuration reference

```yaml
code: # path to which the code should be synced to (defaults to `/etc/peekl/code`)
keep: # number of code revision to keep for each environment when using command `clean` (defaults to `5`)
repository:
  url: # URL of the repository
  key: # Path to SSH key to use for repository cloning (if over SSH)
```
