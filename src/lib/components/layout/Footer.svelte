<script lang="ts">
	import { getContext } from 'svelte';

	import type { footerSettings } from '@/types/graphql';
	import { buildMenuStructure } from '@/lib/utils/buildNavigationMenus';
	import Navigation from '@/lib/components/navigation/Navigation.svelte';

	const footerSettings: footerSettings = getContext('footerSettings');

	const MenuItemNode = footerSettings.footerMenu?.menuItems?.nodes || [];

	// Menustructuur opbouwen en HTML genereren
	const menuStructure = buildMenuStructure(MenuItemNode);
	// const menuHTML = generateMenuHTML(menuStructure);

	// console.log(menuHTML);
</script>

<footer>
	<Navigation type="footer" links={menuStructure} />
</footer>
