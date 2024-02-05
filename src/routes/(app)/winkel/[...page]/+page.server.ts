import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { wc_shop_endpoint } from '@/lib/config/endpoints';

import {
	GetProductsStore,
	GetProductsCountStore,
	GetShopColorsStore,
	GetShopCategoriesStore
} from '$houdini';

import { getProductsWhereArgs } from '@/lib/config/connectionWhereArgs';
import woocommerceSettings from '@/lib/config/webshop';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	const pageParam = event.params.page;
	const pageNumber = pageParam ? parseInt(pageParam.replace('page/', ''), 10) : 1;

	if (pageParam && (isNaN(pageNumber) || pageNumber < 2)) {
		redirect(307, `/${wc_shop_endpoint}`);
	}

	try {
		const pageNumber = +event.params.page.replace('page/', '');
		let nextPage =
			woocommerceSettings.itemsPerPage.shop || woocommerceSettings.itemsPerPage.default;

		if (pageNumber > 0) nextPage = pageNumber * nextPage;

		const GetProducts = async () => {
			const resultGetProductsStore = new GetProductsStore();
			return await resultGetProductsStore.fetch({
				event,
				variables: {
					first: nextPage,
					where: getProductsWhereArgs
				}
			});
		};

		const GetProductsCount = async () => {
			const resultGetProductsCountStore = new GetProductsCountStore();
			return await resultGetProductsCountStore.fetch({ event });
		};

		const GetShopCategories = async () => {
			const resultGetShopCategoriesStore = new GetShopCategoriesStore();
			return await resultGetShopCategoriesStore.fetch({ event });
		};

		const GetShopColors = async () => {
			const resultGetShopColorsStore = new GetShopColorsStore();
			return await resultGetShopColorsStore.fetch({ event });
		};

		return {
			GetProducts: await GetProducts(),
			GetProductsCount: await GetProductsCount(),
			GetShopCategories: await GetShopCategories(),
			GetShopColors: await GetShopColors()
		};
	} catch (e) {
		// Log de error voor debugging doeleinden
		console.error('Error tijdens het laden van de pagina data:', e);

		// Werpt een error 500
		throw error(500, 'Serverfout: Kon de pagina niet laden');
	}
};
