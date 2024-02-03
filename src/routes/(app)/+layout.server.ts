import { GetLayoutStore } from '$houdini';
import type { ServerLoadEvent} from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

/* @type { import('./$houdini').LayoutServerLoad } */
export const load: LayoutServerLoad = async (event: ServerLoadEvent) => {
	const GetLayout = new GetLayoutStore();
	const { data, errors } = await GetLayout.fetch({ event });

	return { data, errors };
};
