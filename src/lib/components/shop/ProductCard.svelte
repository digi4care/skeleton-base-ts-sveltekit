<script lang="ts">
	import type { MyProductTaxonomies, MyProductContentSmall } from '$houdini';
	import { fragment, graphql } from '$houdini';

	export let product: any;
	export let priority: boolean;
	export let className: string;

	import * as C from '@/lib/shadcn/ui/card';
	import { cn } from '@/lib/shadcn/utils/ui';

	import ImageWrapper from './ImageWrapper.svelte';

	let product_tax = product as unknown as MyProductTaxonomies;
	let product_content = product as unknown as MyProductContentSmall;

	$: productTax = fragment(
		product_tax,
		graphql(`
			fragment MyProductTaxonomies on Product {
				productCategories(first: 20) {
					nodes {
						id
						slug
						name
					}
				}
				productTags(first: 20) {
					nodes {
						id
						slug
						name
					}
				}
			}
		`)
	);
	$: productContentSmall = fragment(
		product_content,
		graphql(`
			fragment MyProductContentSmall on ProductUnion {
				id
				databaseId
				slug
				name
				type
				... on ProductUnion {
					shortDescription(format: RAW)
				}
				image {
					...ThumbnailImageFields @mask_disable
				}
				... on ProductWithPricing {
					price
					regularPrice
					salePrice
				}
				... on InventoriedProduct {
					stockStatus
					stockQuantity
					soldIndividually
				}
			}
		`)
	);
	$: categories = $productTax.productCategories?.nodes;
	$: tags = $productTax.productTags?.nodes;
	// $: console.log($productTax.productCategories?.nodes);
</script>

<C.Root class={cn(className, 'flex flex-col')}>
	<C.Header class="p-4">
		<C.Title class="w-full truncate whitespace-nowrap font-serif text-base"
			>{$productContentSmall.name}</C.Title
		>
		<ImageWrapper source={$productContentSmall?.image} {priority} />
	</C.Header>
	<C.Content class="flex flex-col space-y-2 p-4">
		<p class="font-serif text-sm font-semibold">{@html $productContentSmall.price}</p>
	</C.Content>
	<C.Footer class="mt-auto flex-col p-4">
		{#if categories}
			<div class="product__categories">
				<ul class="justify center flex gap-4">
					{#each categories as cat, index (cat.id)}
						<li>
							<a href={`/product-category/${cat.slug}`} title={cat.name}>{cat.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if tags}
			<div class="product__tags">
				<ul class="justify center flex gap-4">
					{#each tags as tag, index (tag.id)}
						<li>
							<a href={`/product-tag/${tag.slug}`} title={tag.name}>{tag.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		<button class="add_to_cart">Toevoegen</button>
	</C.Footer>
</C.Root>
