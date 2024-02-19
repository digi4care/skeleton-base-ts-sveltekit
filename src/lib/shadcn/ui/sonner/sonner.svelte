<script lang="ts">
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';

	/**
	 * By default, Sonner will use the user's system preferences
	 * to determine whether to show the light or dark theme.
	 * To get around this, you can either pass in a custom theme prop to the component,
	 * or simply use mode-watcher which you can hardcode to dark or light mode should you wish.
	 * @url https://www.shadcn-svelte.com/docs/components/sonner
	 */
	// import { mode } from 'mode-watcher';

	type $$Props = SonnerProps;
</script>

<Sonner
	theme="light"
	class="toaster group"
	toastOptions={{
		classes: {
			toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
			description: 'group-[.toast]:text-muted-foreground',
			actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
			cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
		}
	}}
	{...$$restProps}
/>
