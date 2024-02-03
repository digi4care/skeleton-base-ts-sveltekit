<script lang="ts">
	import { getContext } from 'svelte';

	const footerSettings = getContext('footerSettings');
</script>

<pre>
{JSON.stringify(footerSettings, null, 4)}
</pre>