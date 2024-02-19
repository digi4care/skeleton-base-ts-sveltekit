import type { NonNullableEdges, NonNullableNodes } from './types';

/**
 * Houdini
 */
import type {
	GetLayout$result,
	GetShopCategories$result,
	GetProductsCountStore,
	GetProductsStore,
	GetShopCategoriesStore,
	GetShopColorsStore,
	GetProducts$result
} from '$houdini';

export type headerSettings = {
	header: GetLayout$result['header'];
	headerMenu: GetLayout$result['headerMenu'];
};

export type footerSettings = {
	footer: GetLayout$result['footer'];
	footerMenu: GetLayout$result['footerMenu'];
};

export type HomePageData = {
	GetLayout: GetLayout$result;
	GetProductsCount: GetProductsCountStore;
	GetProducts: GetProductsStore;
	GetShopCategories: GetShopCategoriesStore;
	GetShopColors: GetShopColorsStore;
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

/**
 * Helpers
 */
// Union type van alle product types
export type ProductTypes =
	| ExternalProduct
	| GroupProduct
	| SimpleProduct
	| UnsupportedProduct
	| VariableProduct
	| SimpleProductVariation;

// Bestaande types, aangenomen dat deze al gedefinieerd zijn
type ExternalProduct = { __typename: 'ExternalProduct' /* andere velden */ };
type GroupProduct = { __typename: 'GroupProduct' /* andere velden */ };
type SimpleProduct = { __typename: 'SimpleProduct' /* andere velden */ };
type UnsupportedProduct = { __typename: 'UnsupportedProduct' /* andere velden */ };
type VariableProduct = { __typename: 'VariableProduct' /* andere velden */ };
type SimpleProductVariation = { __typename: 'SimpleProductVariation' /* andere velden */ };

// Utility type om het juiste type te extraheren op basis van __typename
type ProductEdgeTypeByTypename<Typename> = Extract<ProductEdge, { __typename: Typename }>;

// Utility type om het juiste type te extraheren op basis van __typename
type ProductNodeTypeByTypename<Typename> = Extract<ProductNode, { __typename: Typename }>;

/**
 * Create Product Edges
 */
export type ProductEdge = NonNullable<
	GetProducts$result['products']
>['edges'][number]['node'];

// Voorbeelden van het extraheren van types op basis van __typename
export type ExternalProductEdgeType = ProductEdgeTypeByTypename<'ExternalProduct'>;
export type GroupProductEdgeType = ProductEdgeTypeByTypename<'GroupProduct'>;
export type SimpleProductEdgeType = ProductEdgeTypeByTypename<'SimpleProduct'>;
export type UnsupportedProductEdgeType = ProductEdgeTypeByTypename<'UnsupportedProduct'>;
export type VariableProductEdgeType = ProductEdgeTypeByTypename<'VariableProduct'>;
export type SimpleProductVariationEdgeType = ProductEdgeTypeByTypename<'SimpleProductVariation'>;

/**
 * Create Product Nodes
 */
export type ProductNode = NonNullable<GetProducts$result['products']>['nodes'][number];

// Voorbeelden van het extraheren van types op basis van __typename
export type ExternalProductNodeType = ProductNodeTypeByTypename<'ExternalProduct'>;
export type GroupProductNodeType = ProductNodeTypeByTypename<'GroupProduct'>;
export type SimpleProductNodeType = ProductNodeTypeByTypename<'SimpleProduct'>;
export type UnsupportedProductNodeType = ProductNodeTypeByTypename<'UnsupportedProduct'>;
export type VariableProductNodeType = ProductNodeTypeByTypename<'VariableProduct'>;
export type SimpleProductVariationNodeType = ProductNodeTypeByTypename<'SimpleProductVariation'>;
