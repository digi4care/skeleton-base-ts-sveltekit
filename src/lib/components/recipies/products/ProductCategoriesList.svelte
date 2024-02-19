<script lang="ts">
	import type { ShopCategoryNodeType } from '@/types/graphql';

	// Deze types kunnen nu gebruikt worden voor het definiëren van je data structuren
	export let categories: ShopCategoryNodeType[] | undefined;
</script>

<ul class="product__categories mb-4 max-h-[40vh] lg:max-h-[25vh] overflow-y-scroll scrollbar-thin scrollbar-corner-rounded scrollbar-thumb-ring">
	{#if categories && categories.length > 0}
		{#each categories as category (category.id)}
			<li class="product__category">
				<a
					href="/product-category/{category.slug || ''}"
					title={category.name || ''}
					class="button">{category.name || ''}</a
				>
			</li>
		{/each}
	{/if}
</ul>
