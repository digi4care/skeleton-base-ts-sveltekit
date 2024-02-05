<script lang="ts">
	import '@/app.postcss';
	import { PUBLIC_ORG, PUBLIC_SITE_DESCRIPTION, PUBLIC_SITE_NAME } from '$env/static/public';

	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	/**
	 * Setup Context
	 *
	 * This is static data.
	 */
	import { setContext } from 'svelte';

	setContext('headerSettings', {
		header: data.data.header,
		headerMenu: data.data.headerMenu
	});

	setContext('footerSettings', {
		footer: data.data.footer,
		footerMenu: data.data.footerMenu
	});

	// const generalSettings = data.data?.generalSettings || data.errors;

	import Layout from '@/lib/components/layout/Layout.svelte';

	// $: console.log((data.posts.status === 200 && data.posts.data.footer));
	// TODO: We need SEO ...
	// console.log(data.data.headerMenu?.menuItems?.nodes)
</script>

<svelte:head>
	<title>
		{`${data.data.generalSettings?.title} | ${PUBLIC_ORG}` ||
			`${PUBLIC_SITE_NAME} - ${PUBLIC_SITE_DESCRIPTION} | ${PUBLIC_ORG}`}
	</title>
</svelte:head>

<Layout>
	<slot />
</Layout>
