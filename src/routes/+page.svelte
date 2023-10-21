<script lang="ts">
	import Test from '@/components/Test.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Test />

<style lang="postcss">
	p {
		font-size: 1rem;

		a {
			color: red;

			&:hover {
				color: green;
			}
		}
	}
</style>
