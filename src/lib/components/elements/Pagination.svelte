<script lang="ts">
	import type { HomePageData } from '@/types/graphql';
	export let data: HomePageData;

	// Destructure
	let { GetProductsMaskingTest } = data;
	$: ({ GetProductsMaskingTest } = data);

	const hasPreviousPage = $GetProductsMaskingTest.pageInfo.hasPreviousPage; // bool
	const hasNextPage = $GetProductsMaskingTest.pageInfo.hasNextPage; // bool
	const startCursor = $GetProductsMaskingTest.pageInfo.startCursor;
	const endCursor = $GetProductsMaskingTest.pageInfo.endCursor;

	/**
	 * ShadCN
	 */
	// Utils
	import { cn } from '@/lib/shadcn/utils/ui';

	// Components
	import { Button } from '@/lib/shadcn/ui/button';

	// Default Settings
	import woocommerceSettings from '@/lib/config/webshop';
	const itemsPerPage =
		woocommerceSettings.itemsPerPage.shop || woocommerceSettings.itemsPerPage.default;
</script>

<div class="mb-4 mt-auto flex justify-start gap-x-2 text-sm">
	<Button
		disabled={!$GetProductsMaskingTest.pageInfo.hasPreviousPage}
		on:click={async () => GetProductsMaskingTest.loadPreviousPage({ last: itemsPerPage })}
		class={cn(
			hasPreviousPage
				? 'text-primary-foreground'
				: 'pointer-events-none text-gray-400 opacity-50',
			'rounded-md text-sm font-medium transition-colors',
			'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
			'h-9 bg-primary px-4 py-2 shadow hover:bg-primary/90'
		)}
		aria-label="Previous page"
	>
		Previous
	</Button>

	<Button
		disabled={!$GetProductsMaskingTest.pageInfo.hasNextPage}
		on:click={async () => GetProductsMaskingTest.loadNextPage({ first: itemsPerPage })}
		class={cn(
			hasNextPage
				? 'text-primary-foreground'
				: 'pointer-events-none text-gray-400 opacity-50',
			'ml-auto rounded-md text-sm font-medium transition-colors',
			'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
			'h-9 bg-primary px-4 py-2 shadow hover:bg-primary/90'
		)}
		aria-label="Next page"
	>
		Next
	</Button>
</div>
