<script lang="ts">
	import { PUBLIC_ORG, PUBLIC_SITE_DESCRIPTION, PUBLIC_SITE_NAME } from '$env/static/public';
	import { fragment, graphql } from '$houdini';
	import type { MyGeneralSettings } from '$houdini';

	export let generalSettings: MyGeneralSettings;

	$: settings = fragment(
		generalSettings,
		graphql(`
			fragment MyGeneralSettings on GeneralSettings {
				description
				language
				timezone
				title
				url
			}
		`)
	);
	let title = `${PUBLIC_SITE_NAME} - ${PUBLIC_SITE_DESCRIPTION} | ${PUBLIC_ORG}`;

	$: if ($settings?.title) {
		title = `${$settings.title} | ${PUBLIC_ORG}`;
	}
</script>

<svelte:head>
	<title>
		{title}
	</title>
</svelte:head>
