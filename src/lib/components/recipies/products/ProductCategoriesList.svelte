<script lang="ts">
	import type { ShopCategoryEdgeType } from '@/types/graphql';

	// Deze types kunnen nu gebruikt worden voor het definiëren van je data structuren
	export let categories: ShopCategoryEdgeType[] | undefined;
</script>

<div class="flex justify-center">
	<ul class="product__categories flex gap-8">
		{#if categories && categories.length > 0}
			{#each categories as category (category.node.id)}
				<li class="product__category">
					<a
						href="/product-category/{category.node.slug || ''}"
						title={category.node.name || ''}
						class="button">{category.node.name || ''}</a
					>
				</li>
			{/each}
		{/if}
	</ul>
</div>
