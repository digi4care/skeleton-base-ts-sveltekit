<script lang="ts">
	import { getContext } from 'svelte';

	import type { headerSettings } from '@/types';
	import { buildMenuStructure } from '@/lib/utils/buildNavigationMenus';
	import Navigation from '@/lib/components/navigation/Navigation.svelte';

	const headerSettings: headerSettings = getContext('headerSettings');

	const MenuItemNode = headerSettings.headerMenu?.menuItems?.nodes || [];

	// Menustructuur opbouwen en HTML genereren
	const menuStructure = buildMenuStructure(MenuItemNode);
	// const menuHTML = generateMenuHTML(menuStructure);

	// console.log(menuHTML);
</script>

<header>
	<Navigation type="primary" links={menuStructure} />
</header>
