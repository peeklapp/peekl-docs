import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Peekl",
  description: "The modern configuration management solution",
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is Peekl', link: '/introduction/what-is-peekl' },
          { text: 'Peekl architecture', link: '/introduction/peekl-architecture' }
        ]
      },
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          { text: 'Setting up the server', link: '/getting-started/setting-up-the-server' },
          { text: 'Setting up the agent', link: '/getting-started/setting-up-the-agent' },
          { text: 'Setting up the syncing tool', link: '/getting-started/setting-up-the-syncing-tool' },
          { text: 'Creating the control repository', link: '/getting-started/creating-the-control-repository' }
        ]
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Resources basics', link: '/resources/resources-basics' },
          { text: 'Command', link: '/resources/command' },
          { text: 'Cron', link: '/resources/cron' },
          { text: 'Debug', link: '/resources/debug' },
          { text: 'Directory', link: '/resources/directory' },
          { text: 'File', link: '/resources/file' },
          { text: 'Group', link: '/resources/group' },
          { text: 'Pkg', link: '/resources/pkg' },
          { text: 'Systemd Daemon', link: '/resources/systemd-daemon' },
          { text: 'Systemd Service', link: '/resources/systemd-service' },
          { text: 'User', link: '/resources/user' },
          { text: 'Template', link: '/resources/template' }
        ]
      },
      {
        text: 'Code structure',
        collapsed: false,
        items : [
          { text: 'Inventory', link: '/code-structure/inventory' },
          { text: 'Variables', link: '/code-structure/variables' },
          { text: 'Roles', link: '/code-structure/roles' }
        ]
      },
      {
        text: 'References',
        collapsed: false,
        items: [
          { text: 'peekl-server', link: '/references/peekl-server' },
          { text: 'peekl-agent', link: '/references/peekl-agent' },
          { text: 'peekl-code', link: '/references/peekl-code' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/peeklapp/peekl' }
    ]
  }
})
