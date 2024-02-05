<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	// Destructure
	let { GetProducts, GetProductsCount, GetShopCategories, GetShopColors } = data;
	$: ({ GetProducts, GetProductsCount, GetShopCategories, GetShopColors } = data);

	// $: console.log($GetShopCategories.data?.productCategories?.edges);
	// $: console.log($GetShopColors.data?.allPaColor?.edges);
	// $: console.log($GetProducts.data?.products?.nodes);

	const categories = $GetShopCategories.data?.productCategories?.edges || [];
	const productCount = $GetProductsCount.data?.products?.found || 0;
	const products = $GetProducts.data?.products?.nodes || [];

	const hasPreviousPage = $GetProducts.data?.products?.pageInfo.hasPreviousPage;
	const hasNextPage = $GetProducts.data?.products?.pageInfo.hasNextPage;
	const startCursor = $GetProducts.data?.products?.pageInfo.startCursor;
	const endCursor = $GetProducts.data?.products?.pageInfo.endCursor;

	/**
	 * ShadCN
	 */
	// Utils
	import { cn } from '@/lib/shadcn/utils/ui';

	// Components
	import { Button } from '@/lib/shadcn/ui/button';

	/**
	 * My Components
	 */
	import ProductCategoriesList from '@/lib/components/shop/ProductCategoriesList.svelte';
	import ProductCard from '@/lib/components/shop/ProductCard.svelte';

	/**
	 * Debug
	 */
	// console.log(productCount);
</script>

<ProductCategoriesList {categories} />

{#if products && products.length}
	<h1><stong class="product__list">Products</stong></h1>

	<p class="mb-4 font-semibold">
		Showing {products.length} of {productCount || products.length} items
	</p>
	<div class="mb-8 flex flex-wrap justify-center gap-8 md:justify-start">
		{#each products as product, index}
		{product.name}
		{product.price}
			<!-- <ProductCard
				className="w-80 grow md:w-40 md:basis-1/4"
				{product}
				priority={index < 8}
			/> -->
		{/each}
	</div>
	<div class="mb-4 mt-auto flex justify-start gap-x-2 text-sm">
		<Button
			disabled={!$GetProducts.pageInfo.hasPreviousPage}
			on:click={async () => GetProducts.loadPreviousPage}
			class={cn(
				hasPreviousPage
					? 'text-primary-foreground'
					: 'pointer-events-none text-gray-400 opacity-50',
				'rounded-md text-sm font-medium transition-colors',
				'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
				'h-9 bg-primary px-4 py-2 shadow hover:bg-primary/90'
			)}
			aria-label="Previous page"
		>
			Previous
		</Button>

		<Button
			disabled={!$GetProducts.pageInfo.hasNextPage}
			on:click={async () => GetProducts.loadNextPage}
			class={cn(
				hasNextPage
					? 'text-primary-foreground'
					: 'pointer-events-none text-gray-400 opacity-50',
				'ml-auto rounded-md text-sm font-medium transition-colors',
				'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
				'h-9 bg-primary px-4 py-2 shadow hover:bg-primary/90'
			)}
			aria-label="Next page"
		>
			Next
		</Button>
	</div>
{/if}
