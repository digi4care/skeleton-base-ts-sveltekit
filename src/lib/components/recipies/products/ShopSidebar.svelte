<script lang="ts">
	import * as Sheet from '@/lib/shadcn/ui/sheet';
	import { Button } from '@/lib/shadcn/ui/button';
</script>

<Sheet.Root>
	<Sheet.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			variant="default"
			class="absolute inset-x-0 top-10 left-0 z-30 mx-auto w-16 lg:hidden">Open</Button
		>
	</Sheet.Trigger>
	<Sheet.Content side="left">
		<Sheet.Header>
			<Sheet.Title></Sheet.Title>
            <p class="mb-2 font-serif text-lg font-bold">Categories</p>
			<Sheet.Description>
				<slot />
			</Sheet.Description>
		</Sheet.Header>
		<Sheet.Footer>
			<Sheet.Close class="mt-4">
				<Button class="flex w-full items-center gap-x-2" type="button">Close</Button>
			</Sheet.Close>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>

<div class="hidden w-1/4 px-4 lg:block">
    <p class="mb-2 font-serif text-lg font-bold">Categories</p>
	<slot />
</div>
