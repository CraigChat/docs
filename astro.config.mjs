// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.craig.chat',

	redirects: {
		'/webapp': '/features/webapp',
		'/features/drive': '/features/cloud-upload'
	},

	integrations: [
		starlight({
			title: 'Craig Docs',
			description: 'Craig is the multi-track recording bot for Discord.',
			logo: {
				src: './src/assets/craig.svg',
				replacesTitle: false,
			},
			favicon: '/favicon.ico',
			social: [
				{ icon: 'discord', label: 'Support Server', href: 'https://discord.gg/PEc4QBE45f' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CraigChat' },
				{ icon: 'patreon', label: 'Patreon', href: 'https://patreon.com/CraigRec' },
			],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{ label: 'Commands', link: 'https://craig.chat/commands' },
				{ label: 'FAQ', link: 'https://craig.chat/faq' },
				{
					label: 'Features',
					items: [
						{ label: 'Auto-record', slug: 'features/auto-record' },
						{ label: 'Cloud Upload', slug: 'features/cloud-upload' },
						{ label: 'Transcription', slug: 'features/transcription' },
						{ label: 'Webapp', slug: 'features/webapp' },
					],
				},
				{
					label: 'Links',
					items: [
						{ label: 'Add Craig', link: 'https://craig.chat/invite', attrs: { target: '_blank' } },
						{ label: 'Dashboard', link: 'https://my.craig.chat/', attrs: { target: '_blank' } },
						{ label: 'Become a Supporter', link: 'https://craig.chat/supporter', attrs: { target: '_blank' } },
						{ label: 'Support Server', link: 'https://discord.gg/PEc4QBE45f', attrs: { target: '_blank' } },
						{ label: 'Status', link: 'https://status.craig.chat', attrs: { target: '_blank' } }
					],
				},
			],
			customCss: ['./src/styles/global.css'],
			head: [
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#00AAAA' },
				},
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				},
			],
  		credits: true,
		}),
		svelte(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
