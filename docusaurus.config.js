// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aestus Relay',
  tagline: 'Reference documentation for the Aestus MEV-Boost relay.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://aestus.live',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aestus-relay', // Usually your GitHub org/user name.
  projectName: 'aestus-docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-black-text.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Aestus Relay',
        logo: {
          alt: 'Aestus Logo',
          src: 'img/logo-black-text.png',
          srcDark: 'img/logo-white-text.png',
          href: 'https://aestus.live',
          target: '_self',
        },
        items: [
          {
            href: 'https://github.com/aestus-relay/aestus-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Aestus Home',
                href: 'https://aestus.live',
              },
              {
                label: 'Mainnet Relay',
                href: 'https://mainnet.aestus.live',
              },
              {
                label: 'Hoodi Relay',
                href: 'https://hoodi.aestus.live',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/AestusRelay',
              },
              {
                label: 'Telegram (TBD)',
                href: 'https://t.me/aestus_relay',
              },
              {
                label: 'Email',
                href: 'mailto:contact@aestus.live',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Aestus GitHub',
                href: 'https://github.com/aestus-relay',
              },
              {
                label: 'Ethereum Builder Specs',
                href: 'https://ethereum.github.io/builder-specs/',
              },
              {
                label: 'Flashbots Relay Specs',
                href: 'https://flashbots.github.io/relay-specs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aestus Relay. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
