<script lang="ts">
	import type { GetShopCategories$result } from '$houdini';
	import type { PageData } from './$types';
	export let data: PageData;

	// Destructure
	let { GetProducts, GetShopCategories, GetShopColors } = data;
	$: ({ GetProducts, GetShopCategories, GetShopColors } = data);

	$: console.log($GetShopCategories.data?.productCategories?.edges);
	// $: console.log($GetShopColors.data?.allPaColor?.edges);
	// $: console.log($GetProducts.data?.products?.nodes);

	import ProductCategoriesList from '@/lib/components/shop/ProductCategoriesList.svelte';
	const categories = $GetShopCategories.data?.productCategories?.edges;
</script>

<ProductCategoriesList {categories} />
