import type { MenuItem, MenuItemWithChildren } from '@/types';

export function buildMenuStructure(nodes: MenuItem[]): MenuItemWithChildren[] {
	const menuItems: Record<string, MenuItemWithChildren> = {};
	nodes.forEach((node) => {
		const newNode: MenuItemWithChildren = { ...node, children: [] };
		if (node.parentId === null) {
			menuItems[node.id] = newNode;
		} else {
			nodes
				.filter((n) => n.id === node.parentId)
				.forEach((parentNode) => {
					if (!menuItems[parentNode.id]) {
						menuItems[parentNode.id] = { ...parentNode, children: [] };
					}
					menuItems[parentNode.id]?.children.push(newNode);
				});
		}
	});
	return Object.values(menuItems).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

// Functie om het menu te genereren (HTML)
export function generateMenuHTML(menuItems: MenuItemWithChildren[]) {
	let html = `<ul>`;
	menuItems.forEach((item) => {
		html += `<li><a href="${item.path}">${item.label}</a>`;
		if (item.children && item.children.length > 0) {
			html += generateMenuHTML(item.children); // Recursief submenu's toevoegen
		}
		html += `</li>`;
	});
	html += `</ul>`;
	return html;
}
