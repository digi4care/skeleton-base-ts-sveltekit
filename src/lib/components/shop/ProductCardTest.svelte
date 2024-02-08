<script lang="ts">
	import ImageWrapper from './ImageWrapper.svelte';

	import type { _MyProductContentSmall$artifact, _MyProductContentSmall$data, _MyProductContentSmall} from '$houdini';
	import { fragment, graphql } from '$houdini';

	export let product: _MyProductContentSmall;
	export let priority: boolean;

	$: productTax = fragment(
		product,
		graphql(`
			fragment _MyProductTaxonomies on Product {
				productCategories(first: 20) {
					nodes {
						id
						slug
						name
					}
				}
				productTags(first: 20) {
					nodes {
						id
						slug
						name
					}
				}
			}
		`)
	);
	
	$: productContentSmall = fragment(
		product,
		graphql(`
			fragment _MyProductContentSmall on ProductUnion {
				id
				databaseId
				slug
				name
				type
				... on ProductUnion {
					shortDescription(format: RAW)
				}
				image {
					...MyThumbnailImageFields @mask_disable
				}
				... on ProductWithPricing {
					price
					regularPrice
					salePrice
				}
				... on InventoriedProduct {
					stockStatus
					stockQuantity
					soldIndividually
				}
			}
		`)
	);
</script>

<h1>{$productContentSmall.name}</h1>
<ImageWrapper source={$productContentSmall.image} {priority} />
