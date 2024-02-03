import type { GetLayout$result } from '$houdini';

export type headerSettings = {
	header: GetLayout$result['header'];
	headerMenu: GetLayout$result['headerMenu'];
};

export type footerSettings = {
	footer: GetLayout$result['footer'];
	footerMenu: GetLayout$result['footerMenu'];
};

export type MenuItemNode = {
	readonly id: string;
	readonly order: number | null;
	readonly parentId: string | null;
	readonly databaseId: number;
	readonly cssClasses: (string | null)[] | null;
	readonly label: string | null;
	readonly linkRelationship: string | null;
	readonly path: string | null;
	readonly target: string | null;
	readonly title: string | null;
	readonly uri: string | null;
}[];

// Veronderstellend dat `MenuItemNode` een array van items is zoals gedefinieerd in je context.
export type MenuItem = MenuItemNode[number];

export type MenuItemWithChildren = MenuItem & { children: MenuItemWithChildren[] };
