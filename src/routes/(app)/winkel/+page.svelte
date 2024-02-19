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
	import ShopSidebar from '@/lib/components/recipies/products/ShopSidebar.svelte';
	import SearchBar from '@/lib/components/recipies/products/SearchBar.svelte';

	/**
	 * Debug
	 */
</script>

<div class="container">
	<div class="flex justify-center py-16">
		<h1><stong class="product__list text-2xl">Products</stong></h1>
	</div>
	{#if $GetProducts.fetching}
		<strong>Still Fetching data</strong>
	{:else}
		<div class="relative mx-auto flex w-full max-w-screen-lg">
			<ShopSidebar>
				{#if categories}
					<ProductCategoriesList {categories} />
				{/if}
			</ShopSidebar>
			<div class="w-full px-4 lg:w-3/4">
				<p class="mb-2 font-serif text-lg font-bold">Search</p>
				<SearchBar />
				<p class="mb-2 font-serif text-lg font-bold">Results</p>
				<Pagination {data} />
				<ProductsList {data} />
				<Pagination {data} />
			</div>
		</div>
	{/if}
</div>
