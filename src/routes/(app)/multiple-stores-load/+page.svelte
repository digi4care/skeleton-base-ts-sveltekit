<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	// Destructure
	let { GetProducts, GetProductsCount, GetShopCategories, GetShopColors } = data;
	$: ({ GetProducts, GetProductsCount, GetShopCategories, GetShopColors } = data);

	$: categories = $GetShopCategories.data?.productCategories?.nodes;
	$: products = $GetProducts.data?.products;
	$: found = $GetProductsCount.data?.products?.found;

	/**
	 * My Components
	 */
	import ProductCategoriesList from '@/lib/components/recipies/products/ProductCategoriesList.svelte';
	import ProductsList from '@/lib/components/recipies/products/ProductsList.svelte';
	import Pagination from '@/lib/components/recipies/products/Pagination.svelte';

	/**
	 * Debug
	 */
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
		<ProductsList {data} />
		<Pagination {data} />
	{/if}
</div>
