<script lang="ts">
	import { PUBLIC_ORG, PUBLIC_SITE_DESCRIPTION, PUBLIC_SITE_NAME } from '$env/static/public';
	import type { GeneralSettings$data } from '$houdini';

	export let generalSettings: GeneralSettings$data;

	let title = `${PUBLIC_SITE_NAME} - ${PUBLIC_SITE_DESCRIPTION} | ${PUBLIC_ORG}`;

	$: if (generalSettings?.title) {
		title = `${generalSettings.title} | ${PUBLIC_ORG}`;
	}
</script>

<svelte:head>
	<title>
		{title}
	</title>
</svelte:head>
