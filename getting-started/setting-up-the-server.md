---
prev:
  text: Peekl architecture
  link: /introduction/peekl-architecture

next:
  text: Setting up the agent
  link: /getting-started/setting-up-the-agent
---

# Setting up the server

## Creating initial configuration

When you're going to install the server, it will automatically start a service, and create a certificate authority. This is the expected behavior. One thing you have to be aware of however is that the generated certificate for the server will only contains the `peekl` DNS name.

If you wanted to use a public DNS record, such as `example.peekl.dev` in the example, you would have to set it inside of the server configuration file before installing the server.

```bash
mkdir -p /etc/peekl/config
cat > /etc/peekl/config/server.yml << EOF
certificates:
  bootstrap_dns_names:
    - 'example.peekl.dev'
EOF
```

## Install from packages

From Github you will be able to find packages available for both Debian and Fedora flavor operating systems. They are all available for both AMD64 and ARM architecture.

::: code-group
```bash [Debian]
# Export version of Peekl to install
export PEEKL_VERSION="0.12.0"

# Get checksum
wget -O /tmp/peekl_checksums.txt https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/checksums.txt

# Download .DEB package
wget -O peekl-server_${PEEKL_VERSION}_linux_amd64.deb https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-server_${PEEKL_VERSION}_linux_amd64.deb

# Validate checksum
sha256sum -c /tmp/peekl_checksums.txt --ignore-missing

# Install package
apt install ./peekl-server_${PEEKL_VERSION}_linux_amd64.deb
```

```bash [Fedora]
# Export version of Peekl to install
export PEEKL_VERSION="0.12.0"

# Get checksum
wget -O /tmp/peekl_checksums.txt https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/checksums.txt

# Download .RPM package
wget -O peekl-server_${PEEKL_VERSION}_linux_amd64.rpm https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-server_${PEEKL_VERSION}_linux_amd64.rpm

# Validate checksum
sha256sum -c /tmp/peekl_checksums.txt --ignore-missing

# Install package
apt install ./peekl-server_${PEEKL_VERSION}_linux_amd64.rpm
```
:::

Following this installation, the server should be up and running, listening on default address and port `0.0.0.0:9040`.
