/**
 * These types are depending on Houdini
 */

import type {
	CatalogVisibilityEnum$options,
	ProductTypesEnum$options,
	StockStatusEnum$options
} from '$houdini';

export const getProductsWhereArgs: {
	visibility: CatalogVisibilityEnum$options;
	type: ProductTypesEnum$options;
	stockStatus: StockStatusEnum$options[];
} = { stockStatus: ['IN_STOCK'], visibility: 'VISIBLE', type: 'SIMPLE' };
