import type { MenuItemOptional, MenuItems } from '../../../types';

export class ArrayManager {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * This function transforms a flat structure (an array) into a nested structure (a tree), based on item-parent relationships.
	 * Each item object in the array should have an 'id' property and a 'parentId' property.
	 * In the resulting tree, each item will include an additional 'children' array containing its child items.
	 * The function will also include additional properties ('postId', 'post_type', 'taxonomyName') extracted from the 'connectedNode' object if it exists.
	 *
	 * @param {MenuItem[]} items - An array of menu items, each item is an object that has at least 'id' and 'parentId' properties.
	 * @param {string | null} [parentId=null] - The parent id to start building the tree from. If null, the tree will start from root items (items with no parent).
	 * @returns {MenuItem[]} An array of menu items, where each item includes an additional 'children' array that contains its child items.
	 */
	public static flatToTree(
		items: MenuItemOptional<NonNullable<unknown>>[] | undefined,
		parentId: string | null = null
	): MenuItems[] {
		if (!items) {
			return [];
		}

		return items
			.filter((item) => item.parentId === parentId)
			.map((item) => {
				let databaseId: number | null = null;
				let post_type: string | null = null;
				let type_names: string | null = null;

				// Check if the ' $fragments' property exists and remove it
				const { [' $fragments']: _, connectedNode, ...rest } = item;

				if (connectedNode && connectedNode.node) {
					const node = connectedNode.node;

					if ('post_type' in node) {
						post_type = node.post_type;
					} else if ('taxonomyName' in node) {
						post_type = node.taxonomyName;
					} else {
						databaseId = null;
						post_type = null;
					}
					databaseId = node.databaseId;
					type_names = node.__typename;
				}
				// console.log(post_type);

				// Determine if the item has children
				const hasChildren = items.some((childItem) => childItem.parentId === item.id);
				const menu_has_children = hasChildren ? 'menu-item-has-children' : '';

				const cssClasses = item.cssClasses && item.cssClasses.length ? item.cssClasses : [];

				// TODO - Uitzoeken als de tags en categorieen in de navigatie iets anders hebben dan een id?

				const menu_item_databaseId = `menu-item-${databaseId ?? 'label'}`;
				const menu_item_type = null !== post_type ? `menu-item-type-${post_type}` : '';
				const menu_item_object = null !== post_type ? `menu-item-object-${post_type}` : '';

                const menu_item_ancestor = null === parentId ? 'menu-item-ancestor' : '';

				const UpdatedCssClasses = ArrayManager.concatenateArray(
					cssClasses,
					'menu-item',
					'nav-item',
					menu_has_children,
					menu_item_type,
					menu_item_object,
					menu_item_databaseId,
                    menu_item_ancestor
				);
				// console.log(UpdatedCssClasses);

				return {
					...rest,
					databaseId,
					cssClasses: [...UpdatedCssClasses],
					post_type,
					type_names,
					children: ArrayManager.flatToTree(items, item.id)
				} as MenuItems; // Explicitly cast the return value to MenuItems[]
			});
	}

	/**
	 * Concatenates new elements to an existing array.
	 *
	 * @template T - The type of elements in the array.
	 * @param {T[] | null} array - The existing array to which new elements will be concatenated.
	 * @param {...T} newElements - The new elements to be added to the array.
	 * @returns {T[]} - The updated array with the new elements concatenated.
	 */
	public static concatenateArray<T>(array: T[] | null, ...newElements: T[]): T[] {
		const filteredNewElements = newElements.filter(
			(element) => element !== null && element !== undefined && element !== ''
		);

		if (Array.isArray(array)) {
			return [...array, ...filteredNewElements];
		}
		return newElements;
	}

	/**
	 * The Array.isArray() method checks if the passed argument is of the JavaScript type 'Array'.
	 * It is a static utility method which uses JavaScript's built-in Array.isArray function.
	 *
	 * @date 2022-08-12
	 * @param {unknown} value - The value to be checked. This can be any type, not just arrays.
	 * @returns {boolean} - Returns true if the passed argument 'value' is of type 'Array', and false otherwise.
	 *
	 * @example
	 * const arrayCheck = ArrayManager.isArray([1, 2, 3]); // Returns: true
	 * const notArrayCheck = ArrayManager.isArray('Not an array'); // Returns: false
	 */
	public static isArray(value: unknown): boolean {
		return Array.isArray(value);
	}
}
