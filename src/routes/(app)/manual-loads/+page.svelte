<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	// Destructure
	let { GetProductsMaskingTest } = data;
	$: ({ GetProductsMaskingTest } = data);

	$: products = $GetProductsMaskingTest.data?.products?.nodes;

	/**
	 * My Components
	 */
	import ProductCard from '@/lib/components/shop/ProductCard.svelte';
	import Pagination from '@/lib/components/shop/Pagination.svelte';
</script>

<div class="container">
	<div class="flex justify-center py-16">
		<h1><stong class="product__list text-2xl">Products</stong></h1>
	</div>
	{#if $GetProductsMaskingTest.fetching}
		<strong>Still Fetching data</strong>
	{:else}
		<Pagination {data} />

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
