import { error } from '@sveltejs/kit'; // Zorg ervoor dat je de error functie importeert
import type { PageLoad } from './$types';

import {
	loadAll,
	// load_GetLayout,
	load_GetProductsCount,
	load_GetProductsMaskingTest,
	load_GetShopCategories,
	load_GetShopColors
} from '$houdini';

import { getProductsWhereArgs } from '@/lib/config/connectionWhereArgs';
import woocommerceSettings from '@/lib/config/webshop';

export const load: PageLoad = async (event) => {
	try {
		const itemsPerPage =
			woocommerceSettings.itemsPerPage.shop || woocommerceSettings.itemsPerPage.default;

		return {
			...(await loadAll(
				// load_GetLayout({ event }),
				load_GetProductsCount({ event }),
				load_GetProductsMaskingTest({
					event,
					variables: {
						first: itemsPerPage,
						where: getProductsWhereArgs
					}
				}),
				load_GetShopCategories({
					event,
					variables: {
						where: {
							hideEmpty: true
						}
					}
				}),
				load_GetShopColors({
					event,
					variables: {
						where: {
							hideEmpty: true
						}
					}
				})
			))
		};
	} catch (e) {
		// Log de error voor debugging doeleinden
		console.error('Error tijdens het laden van de pagina data:', e);

		// Werpt een error 500
		throw error(500, 'Serverfout: Kon de pagina niet laden');
	}
};
