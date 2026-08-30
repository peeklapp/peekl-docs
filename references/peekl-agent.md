---
prev:
  text: 'peekl-server'
  link: '/references/peekl-server'

next:
  text: 'peekl-code'
  link: '/references/peekl-code'
---

# peekl-agent

## CLI Reference

```bash
The configuration management agent of the Peekl suite.

Usage:
  peekl-agent [flags]
  peekl-agent [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  enroll      Enroll the agent with the Peekl server
  help        Help about any command
  run         Run the agent
  version     Obtain information about version and compilation

Flags:
  -c, --config string   Path to the configuration file for the agent (default "/etc/peekl/config/agent.yml")
  -h, --help            help for peekl-agent
      --verbose         enable verbose output

Use "peekl-agent [command] --help" for more information about a command.
```

## Configuration reference

```yaml
server:
  port: # Port of the distant server (defaults to `9040`)
  host: # Host of the peekl-server (defaults to `peekl`)

certificates:
  ca_file_path: # Path to the CA file (defaults to `/etc/ssl/peekl/ssl/ca/ca.pem`)
  csr_file_path: # Path to the CSR file (defaults to `/etc/peekl/ssl/agent/agent.csr`)
  certificate_file_path: # Path to the certificate file (defaults to `/etc/peekl/ssl/agent/agent.pem`)
  certificate_key_path: # Path to the certificate key file (defaults to `/etc/peekl/ssl/agent/agent.key`)
  bootstrap_complete_file_path: # Path to the file for complete bootstrap tracking (defaults to `/etc/peekl/ssl/agent/.bootstrap_complete`)

daemon:
  loop_time: # Time to sleep between each run execution in daemon mode (defaults to `1800`, which is 30 minutes)

logging:
  format: # Format of logs, either string or json (defaults to `string`)
  debug: # To print debug logs or not (defaults to `false`)

environment: # Environment the agent should use (defaults to `production`)

caching: 
  path: # Path in which to cache code from peekl-server (defaults to `/var/lib/peekl/cache/agent`)
```
