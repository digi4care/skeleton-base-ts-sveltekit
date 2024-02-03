<script lang="ts">
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	import Layout from '@/lib/components/Layout.svelte';
    
	// $: console.log((data.posts.status === 200 && data.posts.data.footer));
	$: console.log(data);
</script>

<Layout>
	<slot />
</Layout>
