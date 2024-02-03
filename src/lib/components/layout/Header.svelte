<script lang="ts">
	import { getContext } from 'svelte';

	const headerSettings = getContext('headerSettings');
</script>

<pre>
{JSON.stringify(headerSettings, null, 4)}
</pre>
