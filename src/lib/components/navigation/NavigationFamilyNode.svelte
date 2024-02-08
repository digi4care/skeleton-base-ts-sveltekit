<script lang="ts">
	import type { MenuItemWithChildren } from '@/types/graphql';
	export let member: MenuItemWithChildren;

	import { page } from '$app/stores';
	$: current_page = $page.url.pathname + '/';

	// Create a string from the css array.
	const cssClasses = member.cssClasses ? member.cssClasses.join(' ') : '';

	// Check if the link is the active link
	$: isActive = current_page === member.path;

	// Check if the menu item has children (is a dropdown)
	$: isDropdown = member.children && member.children.length > 0;

	// $: Log.debug('MenuLink', member.post_type === 'paage');
</script>

<li class:active={isActive} class="button pl-8 {cssClasses}">
	{#if member?.path == '#'}
		<span class="nav-link no-link cursor-pointer">
			<span class="nav-link-label">
				{member.label}
			</span>
		</span>
	{:else}
		<a class="nav-link" href={member.path}>
			<span class="nav-link-label">
				{member.label}
			</span>
		</a>
	{/if}

	{#if isDropdown}
		<button
			aria-label="Menu dropdown submenu"
			class="nav-submenu__toggle nav-submenu__icon"
			tabindex="0"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				aria-hidden="true"
				focusable="false"
				><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path></svg
			></button
		>
		<div class="sub-menu-wrap">
			<ul class="sub-menu dropdown-menu">
				{#each member.children as child, i (child.id)}
					<svelte:self member={child} />
				{/each}
			</ul>
		</div>
	{/if}
</li>
