---
prev:
  text: 'Roles'
  link: '/code-structure/roles'

next:
  text: 'peekl-agent'
  link: '/references/peekl-agent'
---

# peekl-server

## CLI Reference

```bash
peekl-server is the server component of the Peekl suite.

Usage:
  peekl-server [flags]
  peekl-server [command]

Available Commands:
  certificates Commands to interact with the certificates created by Peekl
  completion   Generate the autocompletion script for the specified shell
  enroll       Enrollment commands
  help         Help about any command
  run          Run the server
  version      Obtain information about version and compilation

Flags:
  -c, --config string   Path to the configuration file for the server (default "/etc/peekl/config/server.yml")
  -h, --help            help for peekl-server
      --verbose         enable verbose output

Use "peekl-server [command] --help" for more information about a command.
```

## Configuration reference

```yaml
listen:
  port: # Port on which to listen to (defaults to `9040`)
  host: # IP on which to listen to (defaults to `127.0.0.1`)

certificates:
  ca_certificate_file_path: # Path to the root CA file path (defaults to `/etc/peekl/ssl/ca/ca.pem`)
  ca_certificate_key_path: # Path to the root CA key path (defaults to `/etc/peekl/ssl/ca/ca.key`)
  server_certificate_file_path: # Path to the server cert file path (defaults to `/etc/peekl/ssl/server/server.pem`)
  server_certificate_key_path: # Path to the server cert key path (defaults to `/etc/peekl/ssl/server/server.key`)
  bootstrap_dns_names: # List of extra DNS names in server certificate to set during bootstrap (defaults to `[]`)
  bootstrap_done_file_path: # Path to the file to assert if bootstrap was done (defaults to `/etc/peekl/ssl/.bootstrap_done`)

code:
  directory: # Directory in which code to serve lives (defaults to `/etc/peekl/code`)

logging:
  format: # Either string or JSON (defaults to `string`)
  debug: # To enable debug logs or not (defaults to `false`)
  log_path: # Path to the log file to write logs to (defaults to `/var/log/peekl/peekl.log`)

database:
  type: # Type of the database, either postgres or sqlite
  path: # Path to the database (if sqlite)
  host: # Host of the database (if postgres)
  port: # Port of the database (if postgres)
  name: # Name of database (if postgres)
  username: # Username of the database (if postgres)
  password: # Passowrd of the database (if postgres)
  disabled_ssl: # Disable ssl (not required in prod) (if postgres)
```
