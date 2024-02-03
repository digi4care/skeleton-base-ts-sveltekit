import type { PageLoad, PageLoadEvent } from './$types';

import {
	loadAll,
	load_GetLayout,
	load_GetProducts,
	load_GetShopCategories,
	load_GetShopColors
} from '$houdini';

export const load: PageLoad = async (event: PageLoadEvent) => {
	return {
		...(await loadAll(
			load_GetLayout({ event }),
			load_GetProducts({ event }),
			load_GetShopCategories({ event }),
			load_GetShopColors({ event })
		))
	};
};
