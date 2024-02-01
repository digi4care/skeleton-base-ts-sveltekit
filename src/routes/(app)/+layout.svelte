<script lang="ts">
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;
    
	// $: console.log((data.posts.status === 200 && data.posts.data.footer));
	// $: console.log(header);
</script>

<Layout>
	<slot />
</Layout>
