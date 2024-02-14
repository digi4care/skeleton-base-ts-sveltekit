<script lang="ts">
	import { fragment, graphql, type ThumbnailImageFields$data } from '$houdini';

	type ThumbnailImageFields = ThumbnailImageFields$data | null;
	
	export let source: ThumbnailImageFields;
	export let priority: boolean;

	import { Image } from '@unpic/svelte';
	import fallbackImage from '@/lib/assets/placeholders/woocommerce-placeholder-400x300.png.webp';

	// $: thumbnailImageFields = fragment(
	// 	source,
	// 	graphql(`
	// 		fragment MyThumbnailImageFields on MediaItem {
	// 			id
	// 			sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
	// 			altText
	// 		}
	// 	`)
	// );

	$: sourceUrl = source?.sourceUrl || fallbackImage;
	$: altText = source?.altText;
	// $: console.log(source.sourceUrl);
</script>

<picture>
	<Image src={sourceUrl} width={300} height={400} alt={altText} {priority} />
</picture>
