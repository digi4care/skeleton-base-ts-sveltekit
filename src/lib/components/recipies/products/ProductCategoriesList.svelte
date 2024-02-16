<script lang="ts">
	import type { ShopCategoryNodeType } from '@/types/graphql';

	// Deze types kunnen nu gebruikt worden voor het definiëren van je data structuren
	export let categories: ShopCategoryNodeType[] | undefined;
</script>

<div class="flex justify-center">
	<ul class="product__categories flex gap-8">
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
</div>
