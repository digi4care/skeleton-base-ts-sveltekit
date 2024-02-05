import { error } from '@sveltejs/kit'; // Zorg ervoor dat je de error functie importeert
import type { PageLoad, PageLoadEvent } from './$types';

import {
	loadAll,
	// load_GetLayout,
	load_GetProductsCount,
	load_GetProducts,
	load_GetShopCategories,
	load_GetShopColors
} from '$houdini';

import { getProductsWhereArgs } from '@/lib/config/connectionWhereArgs';

export const load: PageLoad = async (event: PageLoadEvent) => {
	try {
		const pageNumber = +event.params.page.replace('page/', '');
		let nextPage = 10;

		if (pageNumber > 0) nextPage = pageNumber * nextPage;

		const results = await loadAll(
			// load_GetLayout({ event }),
			load_GetProductsCount({ event }),
			load_GetProducts({
				event,
				variables: {
					first: nextPage,
					where: getProductsWhereArgs
				}
			}),
			load_GetShopCategories({ event }),
			load_GetShopColors({ event })
		);

		return results;
	} catch (e) {
		// Log de error voor debugging doeleinden
		console.error('Error tijdens het laden van de pagina data:', e);

		// Werpt een error 500
		throw error(500, 'Serverfout: Kon de pagina niet laden');
	}
};
