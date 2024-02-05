<script lang="ts">
	import type { ProductContentSmall$data } from '$houdini';
	export let product: ProductContentSmall$data;
	export let priority: boolean;
	export let className: string;

	import * as C from '@/lib/shadcn/ui/card';
	import { cn } from '@/lib/shadcn/utils/ui';

	import { Image } from '@unpic/svelte';
	import fallbackImage from '@/lib/assets/placeholders/woocommerce-placeholder-400x300.png.webp';

	const sourceUrl: string = product?.image?.sourceUrl || fallbackImage;
	const altText: string = product?.image?.altText;
</script>

<C.Root class={cn(className, 'flex flex-col')}>
	<C.Header class="p-4">
		<C.Title class="w-full truncate whitespace-nowrap font-serif text-base"
			>{product.name}</C.Title
		>
		{sourceUrl}
		{#if sourceUrl}
			<picture>
				<Image
					src={sourceUrl}
					width={300}
					height={400}
					alt={altText}
					{priority}
				/>
			</picture>
		{/if}
	</C.Header>
	<C.Content class="flex flex-col space-y-2 p-4">
		<p class="font-serif text-sm font-semibold">{@html product.price}</p>
	</C.Content>
	<C.Footer class="mt-auto p-4">
		<button class="add_to_cart">Toevoegen</button>
	</C.Footer>
</C.Root>
