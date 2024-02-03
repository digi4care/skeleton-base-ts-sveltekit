<script lang="ts">
	import { page } from '$app/stores';

	const { status, error } = $page;

	const { message = '' } = error ?? {};
	const title = `${status}: ${message}`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<h1>Error: {status}</h1>
<p>
	{message}&hellip;
</p>
