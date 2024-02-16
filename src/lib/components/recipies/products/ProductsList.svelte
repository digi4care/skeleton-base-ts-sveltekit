<script lang="ts">
	import type { HomePageData } from '@/types/graphql';
	export let data: HomePageData;

	// Destructure
	let { GetProductsMaskingTest, GetProductsCount, GetShopCategories, GetShopColors } = data;
	$: ({ GetProductsMaskingTest, GetProductsCount, GetShopCategories, GetShopColors } = data);

	const products = $GetProductsMaskingTest.data?.products;
	const found = $GetProductsCount.data?.products?.found;

	import ProductCard from '@/lib/components/recipies/products/ProductCard.svelte';

	// $: console.log(found);
	// $: console.log(products?.edges);
</script>

<p class="mb-4 font-semibold">
	Showing {products?.edges.length} of {found || products?.edges.length} items
</p>
<div class="mb-8 flex flex-wrap justify-center gap-8 md:justify-start">
	{#if products?.edges}
		{#each products?.edges as { node }, index (node.id)}
			<ProductCard
				className="w-80 grow md:w-40 md:basis-1/4"
				product={node}
				priority={index < 8}
			/>
		{/each}
	{/if}
</div>
