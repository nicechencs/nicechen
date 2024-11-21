import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Chencs Docs',
			social: {
				github: 'https://github.com/nicechencs/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '关于',
					items: [
						{ label: '联系我', link: '/contact' },
					],
				},
			],
		}),
	],
});