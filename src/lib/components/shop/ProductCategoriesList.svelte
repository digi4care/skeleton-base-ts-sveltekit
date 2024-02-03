<script lang="ts">
	import type { GetShopCategories$result } from '$houdini';
	import type { ShopCategoryEdgeType } from '@/types';

	// Deze types kunnen nu gebruikt worden voor het definiëren van je data structuren
	export let categories: ShopCategoryEdgeType[] | undefined;
</script>

<ul class="product__categories">
	{#if categories && categories.length > 0}
		{#each categories as category (category.node.id)}
			<li class="product__category">
				<a href="/product-category/{category.node.slug || ''}" title=""
					>{category.node.name || ''}</a
				>
			</li>
		{/each}
	{/if}
</ul>
