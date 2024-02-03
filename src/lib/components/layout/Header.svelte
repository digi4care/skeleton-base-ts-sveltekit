<script lang="ts">
	import { getContext } from 'svelte';

	import type { headerSettings } from '@/types';
	import { buildMenuStructure, generateMenuHTML } from '@/lib/utils/buildNavigationMenus';

	const headerSettings: headerSettings = getContext('headerSettings');

	const MenuItemNode = headerSettings.headerMenu?.menuItems?.nodes || [];

	// Menustructuur opbouwen en HTML genereren
	const menuStructure = buildMenuStructure(MenuItemNode);
	const menuHTML = generateMenuHTML(menuStructure);

	// console.log(menuHTML);
</script>

{@html menuHTML}
