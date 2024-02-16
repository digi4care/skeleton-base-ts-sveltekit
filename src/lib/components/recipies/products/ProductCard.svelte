<script lang="ts">
	import {
		type ExternalProductEdgeType,
		type GroupProductEdgeType,
		type SimpleProductEdgeType,
		type SimpleProductVariationEdgeType,
		type UnsupportedProductEdgeType,
		type VariableProductEdgeType
	} from '@/types/graphql';

	export let product:
		| ExternalProductEdgeType
		| GroupProductEdgeType
		| SimpleProductEdgeType
		| UnsupportedProductEdgeType
		| VariableProductEdgeType
		| SimpleProductVariationEdgeType;

	export let priority: boolean;
	export let className: string;

	import * as C from '@/lib/shadcn/ui/card';
	import { cn } from '@/lib/shadcn/utils/ui';

	import ImageWrapper from '@/lib/components/elements/ImageWrapper.svelte';
</script>

<C.Root class={cn(className, 'flex flex-col')}>
	<C.Header class="p-4">
		<C.Title class="w-full truncate whitespace-nowrap font-serif text-base"
			>{product.name}</C.Title
		>
		<ImageWrapper source={product?.image} {priority} />
	</C.Header>
	<C.Content class="flex flex-col space-y-2 p-4">
		<p class="font-serif text-sm font-semibold">{@html product.price}</p>
	</C.Content>
	<C.Footer class="mt-auto flex-col p-4">
		{#if product.__typename !== 'SimpleProductVariation' && product.productCategories}
			<div class="product__categories">
				<ul class="justify center flex flex-wrap gap-x-4">
					{#each product.productCategories.nodes as cat, index (cat.id)}
						<li>
							<a href={`/product-category/${cat.slug}`} title={cat.name}
								>{cat.name} (<strong>{cat.count}</strong>)</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if product.__typename !== 'SimpleProductVariation' && product.productTags}
			<div class="product__tags">
				<ul class="justify center flex flex-wrap gap-x-4">
					{#each product.productTags.nodes as tag, index (tag.id)}
						<li>
							<a href={`/product-tag/${tag.slug}`} title={tag.name}
								>{tag.name} (<strong>{tag.count}</strong>)</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		<button class="add_to_cart">Toevoegen</button>
	</C.Footer>
</C.Root>
