import type { NonNullableEdges, NonNullableNodes } from './types';

/**
 * Houdini
 */
import type { GetLayout$result, GetShopCategories$result } from '$houdini';

export type headerSettings = {
	header: GetLayout$result['header'];
	headerMenu: GetLayout$result['headerMenu'];
};

export type footerSettings = {
	footer: GetLayout$result['footer'];
	footerMenu: GetLayout$result['footerMenu'];
};

/** Shop Categories */
export type ShopCategoryEdgeType = NonNullableEdges<GetShopCategories$result['productCategories']>;
export type ShopCategoryNodeType = NonNullableNodes<GetShopCategories$result['productCategories']>;

// Use this helper type to specifically get the types for menuItems of both the header and footer.
type HeaderMenuItemsType = NonNullable<GetLayout$result['headerMenu']>;
export type HeaderMenuItemsNode = NonNullable<HeaderMenuItemsType['menuItems']>;

type FooterMenuItemsType = NonNullable<GetLayout$result['footerMenu']>;
export type FooterMenuItemsNode = NonNullable<FooterMenuItemsType['menuItems']>;

// Please define the same node elements for both headerMenu and footerMenu in GraphQL
export type MenuItemNode = HeaderMenuItemsNode['nodes'];

// Assuming that MenuItemNode is an array of items as defined in your context.
export type MenuItem = MenuItemNode[number];
export type MenuItemWithChildren = MenuItem & { children: MenuItemWithChildren[] };
