<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	// Destructure
	let { GetProducts, GetShopCategories, GetShopColors } = data;
	$: ({ GetProducts, GetShopCategories, GetShopColors } = data);

	// $: console.log($GetShopCategories.data?.productCategories?.edges);
	// $: console.log($GetShopColors.data?.allPaColor?.edges);
	// $: console.log($GetProducts.data?.products?.nodes);

	import ProductCategoriesList from '@/lib/components/shop/ProductCategoriesList.svelte';

	const categories = $GetShopCategories.data?.productCategories?.edges;
	const products = $GetProducts.data?.products?.nodes;
</script>

<ProductCategoriesList {categories} />

{#if products}
	<h1><stong class="product__list">Products</stong></h1>
	{#each products as product}
	<p class="font-semibold mb-4">Showing {products.length} of {productCount || products.length} items</p>
	<div class="flex flex-wrap justify-center md:justify-start gap-8 mb-8">
	  {products.map((product, index) => (
		<CardComponent
		  class="w-80 md:w-40 md:basis-1/4 grow"
		  product={product}
		  key={product.id}
		  priority={index < 8}
		/>
	  ))}
	</div>
	<div class="flex justify-start mt-auto mb-4 gap-x-2 text-sm">
	  <Button
		onClick={prevPage}
		class={cn(
		  hasPreviousPage ? 'text-primary-foreground' : 'text-gray-400 opacity-50 pointer-events-none',
		  'rounded-md text-sm font-medium transition-colors',
		  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
		  'bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2',
		)}
		aria-label="Previous page"
	  >
		Previous
	  </Button>
	  <Button
		onClick={nextPage}
		class={cn(
		  hasNextPage ? 'text-primary-foreground' : 'text-gray-400 opacity-50 pointer-events-none',
		  'ml-auto rounded-md text-sm font-medium transition-colors',
		  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
		  'bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2',
		)}
		aria-label="Next page"
	  >
		Next
	  </Button>
	</div>
	{/each}
{/if}
