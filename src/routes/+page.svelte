<script lang="ts">
	import Test from '@/components/Test.svelte';
</script>

<div class="container bg-magnum-966 text-white">
	<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
	<p class="font-mono">
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>

	<Test />
</div>

<style lang="postcss">
	.container {
		box-shadow: 0px 1px 10px theme('colors.magnum.950');
	}
</style>
