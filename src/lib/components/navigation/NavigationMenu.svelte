<script lang="ts">
	import type { MenuItems } from '../../../../types';
	export let nav_links: MenuItems[];
	export let isMobileMenuOpen: boolean;

	import NavigationFamilyNode from './NavigationFamilyNode.svelte';
</script>

<div class="nav-container" class:is-menu-open={isMobileMenuOpen}>
	<div
		id="main-nav"
		class="nav-container-content container mx-auto"
		class:hidden={!isMobileMenuOpen}
	>
		<ul id="primary-menu" class="menu menu-primary navbar-nav">
			{#each nav_links as link, i}
				<NavigationFamilyNode member={link} {isMobileMenuOpen} />
			{/each}
		</ul>
	</div>
</div>

<style>
	.navbar-nav {
		display: flex;
		flex-direction: column;
		align-items: baseline;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
	}
	.nav-container {
		bottom: 0;
		display: none;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
	}
	.nav-container.is-menu-open {
		background-color: rgba(238, 238, 238, 0.9);
		border-color: #333333;
		border-style: solid;
		border-width: 1px;
		border-radius: 0.125em;
		color: #000;
		animation: overlay-menu__fade-in-animation 0.1s ease-out;
		animation-fill-mode: forwards;
		display: flex;
		flex-direction: column;
		overflow: auto;
	}

	.nav-container-content:not(.hidden) {
		overflow: visible;
		padding-top: calc(2rem + 24px);
		box-sizing: border-box;
	}

	.is-menu-open .menu-primary {
		font-size: 1.25rem;
		position: relative;
		background-color: gray;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		gap: .5rem;
		margin: 0 auto;
		transition: 0.2s;
		transition-timing-function: ease-out;
		padding: 0;
		max-width: 100%;
		width: 100%;
	}

	@keyframes overlay-menu__fade-in-animation {
		0% {
			opacity: 0;
			transform: translateY(0.5em);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
