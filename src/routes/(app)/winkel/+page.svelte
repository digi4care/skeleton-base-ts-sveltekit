<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	// Destructure
	let { GetProducts, GetProductsCount, GetShopCategories, GetShopColors } = data;
	$: ({ GetProducts, GetProductsCount, GetShopCategories, GetShopColors } = data);

	// $: console.log($GetShopCategories.data?.productCategories?.edges);
	// $: console.log($GetShopColors.data?.allPaColor?.edges);
	// $: console.log($GetProducts.data?.products?.nodes);

	$: categories = $GetShopCategories.data?.productCategories?.nodes;
	$: productCount = $GetProductsCount.data?.products?.found || 0;
	$: products = $GetProducts.data?.products?.nodes;

	/**
	 * My Components
	 */
	import ProductCategoriesList from '@/lib/components/recipies/products/ProductCategoriesList.svelte';
	import ProductCard from '@/lib/components/recipies/products/ProductCard.svelte';
	import Pagination from '@/lib/components/elements/Pagination.svelte';

	/**
	 * Debug
	 */
	// $: console.log(products);
</script>

<div class="container">
	<ProductCategoriesList {categories} />

	<div class="flex justify-center py-16">
		<h1><stong class="product__list text-2xl">Products</stong></h1>
	</div>
	{#if $GetProducts.fetching}
		<strong>Still Fetching data</strong>
	{:else}
		<Pagination {data} />

		<p class="mb-4 font-semibold">
			Showing {products?.length} of {productCount || products?.length} items
		</p>
		<div class="mb-8 flex flex-wrap justify-center gap-8 md:justify-start">
			{#if products}
				{#each products as product, index (product.id)}
					<ProductCard
						className="w-80 grow md:w-40 md:basis-1/4"
						{product}
						priority={index < 8}
					/>
				{/each}
			{/if}
		</div>
		<Pagination {data} />
	{/if}
</div>
