import { GetLayoutStore } from '$houdini';
import type LayoutServerLoad from './types'

/* @type { import('./$houdini').LayoutServerLoad } */
export const load: LayoutServerLoad = async (event) => {
	const GetLayout = new GetLayoutStore();
	const { data, errors } = await GetLayout.fetch({ event });

	return { data, errors };
};
