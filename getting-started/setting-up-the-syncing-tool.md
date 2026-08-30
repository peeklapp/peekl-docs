---
prev:
  text:
  link:

next:
  text:
  link:
---

# Setting up the syncing tool

With Peekl your code lives in a control repository. This control repository is considered "raw data" and cannot be used as is by the server. In order for it to get served to nodes, it is required to "pre-compile" it. The tool that does that is called `peekl-code`.

## Install from packages

::: info
This tool should be installed on the server on which `peekl-server` is running as it will generate data for `peekl-server` to serves from the local filesystem
:::


::: code-group
```bash [Debian]
# Export version of Peekl to install
export PEEKL_VERSION="0.12.0"

# Get checksum
wget -O /tmp/peekl_checksums.txt https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/checksums.txt

# Download .DEB package
wget -O peekl-code_${PEEKL_VERSION}_linux_amd64.deb https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-code_${PEEKL_VERSION}_linux_amd64.deb

# Validate checksum
sha256sum -c /tmp/peekl_checksums.txt --ignore-missing

# Install package
apt install ./peekl-code_${PEEKL_VERSION}_linux_amd64.deb
```

```bash [Fedora]
# Export version of Peekl to install
export PEEKL_VERSION="0.12.0"

# Get checksum
wget -O /tmp/peekl_checksums.txt https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/checksums.txt

# Download .RPM package
wget -O peekl-code_${PEEKL_VERSION}_linux_amd64.rpm https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-code_${PEEKL_VERSION}_linux_amd64.rpm

# Validate checksum
sha256sum -c /tmp/peekl_checksums.txt --ignore-missing

# Install package
apt install ./peekl-code_${PEEKL_VERSION}_linux_amd64.rpm
```
:::

## Base configuration

As `peekl-code` will interact with your repository, it needs to know where it is located, and needs an SSH keys to be able to pull it if the repository is to be pulled over SSH.

The following code snippet should cover a basic configuration, with SSH key. The file should be created at path `/etc/peekl/config/code.yml`

```yaml
repository:
  url: "git@github.com:peeklapp/peekl-demo.git"
  key: "/root/.ssh/peekl_automation"
```

## Sync up code

Then to sync up the code, simply run the command `peekl-code sync` (by default it will sync the `production` environment)
