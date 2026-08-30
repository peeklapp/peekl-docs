---
prev:
  text: Setting up the server
  link: /getting-started/setting-up-the-server

next:
  text: Setting up the syncing tool
  link: /getting-started/setting-up-the-syncing-tool
---

# Setting up the agent

## Setting appropriate DNS entry

If you didn't make the choice of using a public DNS addresses when setting up the server, you will end-up having to add new DNS entry that points to the Peekl server. 

You can do so with the following command, but make sure to adapt the IP address to reflect the one you're using.

```bash
echo "192.168.121.1 peekl" >> /etc/hosts
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
wget -O peekl-agent_${PEEKL_VERSION}_linux_amd64.deb https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-agent_${PEEKL_VERSION}_linux_amd64.deb

# Validate checksum
sha256sum -c /tmp/peekl_checksums.txt --ignore-missing

# Install package
apt install ./peekl-agent_${PEEKL_VERSION}_linux_amd64.deb
```

```bash [Fedora]
# Export version of Peekl to install
export PEEKL_VERSION="0.12.0"

# Get checksum
wget -O /tmp/peekl_checksums.txt https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/checksums.txt

# Download .RPM package
wget -O peekl-agent_${PEEKL_VERSION}_linux_amd64.rpm https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-agent_${PEEKL_VERSION}_linux_amd64.rpm

# Validate checksum
sha256sum -c /tmp/peekl_checksums.txt --ignore-missing

# Install package
apt install ./peekl-agent_${PEEKL_VERSION}_linux_amd64.rpm
```
:::

## Enrolling the agent

Agent enrollment is done in two step : 
- Generating an enrollment token on the server-side;
- Using this enrollment token with the agent.

First on the server you'll need to run the following command. The IP you have to give is the IP which the agent is going to use to communicate with the server.

```bash
peekl-server enroll create --ip 192.168.121.2
```

You will then have to copy the generated token, which you will then use on the agetn with the following command.

```bash
peekl-agent enroll 7d7e9965-db33-49a2-9b4e-39aa05303693
```

After that the agent will be ready to be used.

## Enable daemon mode

If you want the agent to run in daemon mode, you can enable the systemd unit that has been installed alongside the package.

```bash
systemctl enable peekl-agent.service
systemctl start peekl-agent.service
```
