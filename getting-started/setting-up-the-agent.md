---
prev:
  text: Setting up the server
  link: /getting-started/setting-up-the-server

next:
  text: Enrolling the agent
  link: /getting-started/enrolling-the-agent
---

# Setting up the agent

## Installing using packages

By default the agent will try to contact the Peekl server using https://peekl:9040 To work with this, you have two solutions :

Either make use of the peekl DNS name by adding it to the `/etc/hosts` file, using the command `echo '192.168.121.10 peekl' >> /etc/hosts` (update the IP accordingly to your case).

Or create a configuration file at path `/etc/peekl/config/agent.yml` and add the following content to it (again, adapt the IP address to your case).

```yaml
server:
  host: 192.168.121.10
  port: 9040
```

Once this is done, you can proceed by just installing the agent using the Debian packages

```bash
export PEEKL_VERSION=0.2.0
export PEEKL_ARCH=amd64
wget https://github.com/peeklapp/peekl/releases/download/${PEEKL_VERSION}/peekl-agent_${PEEKL_VERSION}_linux_${PEEKL_ARCH}.deb
apt install ./peekl-agent_${PEEKL_VERSION}_linux_${PEEKL_ARCH}.deb
```

The agent should be up and running at this point.

```bash
systemctl status peekl-agent.service
```

## Signing the certificate on the server

Now that the agent is running, if everything went well, it should have sent it's certificate to be signed to the server.

On the server you can go ahead and list the pending certificates.

```bash
peekl-server ca list pending
```

And then simply sign the certificate using the name based on the previous command result.

```bash
peekl-server ca sign --certname name_of_the_node
```

Then you can force the agent to download certificate by manually running it.

```bash
peekl-agent run
```
