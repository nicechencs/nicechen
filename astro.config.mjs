import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Chencs Pages',
      description: 'Personal documentation and knowledge base',
      social: {
        github: 'https://github.com/nicechencs',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Quick Start', link: '/guides/getting-started' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Basic Tutorial', link: '/guides/basics' },
            { label: 'Advanced Topics', link: '/guides/advanced' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'About',
          items: [
            { label: 'About Me', link: '/about' },
            { label: 'Contact', link: '/contact' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});