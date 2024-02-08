<script lang="ts">
	import '@/app.postcss';

	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	// Destructure
	let { GetLayout } = data;
	$: ({ GetLayout } = data);

	/**
	 * Setup Context
	 *
	 * This is static data.
	 */
	import { setContext } from 'svelte';

	setContext('headerSettings', {
		header: GetLayout.header,
		headerMenu: GetLayout.headerMenu
	});

	setContext('footerSettings', {
		footer: GetLayout.footer,
		footerMenu: GetLayout.footerMenu
	});

	import Layout from '@/lib/components/layout/Layout.svelte';
	import SeoPageTitle from '@/lib/components/seo/LayoutPageSeoPageTitle.svelte';
</script>

<SeoPageTitle generalSettings={GetLayout?.generalSettings} />

<Layout>
	<slot />
</Layout>
