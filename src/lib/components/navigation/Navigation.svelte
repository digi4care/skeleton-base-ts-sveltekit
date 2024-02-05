<script lang="ts">
	import type { MenuItemWithChildren } from '@/types';
	import NavigationFamilyNode from './NavigationFamilyNode.svelte';

	export let type: string;
	export let links: MenuItemWithChildren[];
</script>

<nav>
	<ul id="{type}-menu" class="menu menu-{type} navbar-nav">
		{#each links as link, i}
			<NavigationFamilyNode member={link} />
		{/each}
	</ul>
</nav>
