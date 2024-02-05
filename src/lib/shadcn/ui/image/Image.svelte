<script lang="ts">
	export let src: string;
	export let alt: string;
	export let width: number;
	export let height: number;
	export let layout = 'constrained';
	export let ratio: number;

	import { cn } from '@/lib/utils/ui';
	import LoadingSpinner from '@/lib/shadcn/ui/loadingspinner/LoadingSpinner.svelte';
	import { AspectRatio } from '@/lib/shadcn/ui/aspect-ratio';

	/**
	 * External libraries
	 */
	import { Image } from '@unpic/svelte';

	let isLoading = false;
</script>

<AspectRatio>
	{#if isLoading}
		<LoadingSpinner
			className="position absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
	{/if}
	<Image
		{src}
		{alt}
		{width}
		{height}
		{layout}
		class={cn(
			'object-cover group-hover:opacity-75',
			'duration-700 ease-in-out',
			isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
		)}
	/>
</AspectRatio>
