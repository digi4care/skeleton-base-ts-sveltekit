import { error } from '@sveltejs/kit'; // Zorg ervoor dat je de error functie importeert
import type { PageLoad } from './$types';

import { load_GetProducts } from '$houdini';
import { getProductsWhereArgs } from '@/lib/config/connectionWhereArgs';
import woocommerceSettings from '@/lib/config/webshop';

export const load: PageLoad = async (event) => {
	try {
		const itemsPerPage =
			woocommerceSettings.itemsPerPage.shop || woocommerceSettings.itemsPerPage.default;
		return {
			...(await load_GetProducts({
				event,
				variables: {
					first: itemsPerPage,
					where: getProductsWhereArgs
				}
			}))
		};
	} catch (e) {
		// Log de error voor debugging doeleinden
		console.error('Error tijdens het laden van de pagina data:', e);

		// Werpt een error 500
		throw error(500, 'Serverfout: Kon de pagina niet laden');
	}
};
