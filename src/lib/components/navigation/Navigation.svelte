<script lang="ts">
	import type { MenuItemWithChildren } from '@/types';
	import NavigationFamilyNode from './NavigationFamilyNode.svelte';

	export let type: string;
	export let links: MenuItemWithChildren[];
</script>

<nav>
	<ul id="primary-menu" class="menu menu-primary navbar-nav">
		{#each links as link, i}
			<NavigationFamilyNode member={link} />
		{/each}
	</ul>
</nav>
