<script lang="ts">
	import { fragment, graphql, type MyThumbnailImageFields } from '$houdini';

	export let source: MyThumbnailImageFields;
	export let priority: boolean;

	import { Image } from '@unpic/svelte';
	import fallbackImage from '@/lib/assets/placeholders/woocommerce-placeholder-400x300.png.webp';

	$: thumbnailImageFields = fragment(
		source,
		graphql(`
			fragment MyThumbnailImageFields on MediaItem {
				id
				sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
				altText
			}
		`)
	);

	$: sourceUrl = $thumbnailImageFields?.sourceUrl || fallbackImage;
	$: altText = $thumbnailImageFields?.altText;
	// $: console.log($thumbnailImageFields.sourceUrl);
</script>

<picture>
	<Image src={sourceUrl} width={300} height={400} alt={altText} {priority} />
</picture>
