<script lang="ts">
	import { getContext } from 'svelte';

	import type { footerSettings } from '@/types';
	import { buildMenuStructure, generateMenuHTML } from '@/lib/utils/buildNavigationMenus';

	const footerSettings: footerSettings = getContext('footerSettings');

	const MenuItemNode = footerSettings.footerMenu?.menuItems?.nodes || [];

	// Menustructuur opbouwen en HTML genereren
	const menuStructure = buildMenuStructure(MenuItemNode);
	const menuHTML = generateMenuHTML(menuStructure);

	// console.log(menuHTML);
</script>

{@html menuHTML}
