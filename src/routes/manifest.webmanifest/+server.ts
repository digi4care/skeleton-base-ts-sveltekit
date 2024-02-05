import type { RequestHandler } from '@sveltejs/kit';
import website from '@/lib/config/website';

export const prerender = true;

export const GET: RequestHandler = function get({ setHeaders }) {
	const { backgroundColor, description, siteShortTitle, siteTitle, siteUrl, themeColor } =
		website;

	const manifest = {
		name: siteTitle,
		short_name: siteShortTitle,
		description,
		start_url: siteUrl,
		background_color: backgroundColor,
		theme_color: themeColor,
		display: 'standalone',
		icons: [
			{ src: '/icon-192.png', type: 'image/png', sizes: '192x192' },
			{ src: '/icon-512.png', type: 'image/png', sizes: '512x512' }
		]
	};

	setHeaders({
		'content-type': 'application/json'
	});

	return new Response(JSON.stringify(manifest));
};