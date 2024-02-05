import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [/* sveltePreprocess(), */ vitePreprocess()],
	vitePlugin: {
		inspector: true
	},
	kit: {
		adapter: adapter(),
		alias: {
			'@': './src',
			$houdini: './$houdini'
		},
		files: {
			hooks: {
				client: 'src/hooks/client.ts',
				server: 'src/hooks/server.ts'
			}
		}
	}
};

export default config;
