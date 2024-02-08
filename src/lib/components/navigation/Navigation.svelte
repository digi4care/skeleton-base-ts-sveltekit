<script lang="ts">
	import type { MenuItemWithChildren } from '@/types/graphql';
	import NavigationFamilyNode from './NavigationFamilyNode.svelte';

	export let type: string;
	export let links: MenuItemWithChildren[];
</script>

<nav class="container my-8">
	<ul id="{type}-menu" class="menu menu-{type} navbar-nav flex gap-8">
		{#each links as link, i}
			<NavigationFamilyNode member={link} />
		{/each}
	</ul>
</nav>
