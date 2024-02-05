import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { wc_shop_endpoint } from '@/lib/config/endpoints';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	const pageParam = event.params.page;
	const pageNumber = pageParam ? parseInt(pageParam.replace('page/', ''), 10) : 1;

	if (pageParam && (isNaN(pageNumber) || pageNumber < 2)) {
		redirect(307, `/${wc_shop_endpoint}`);
	}
};
