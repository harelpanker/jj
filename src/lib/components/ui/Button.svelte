<script lang="ts">
	import { Button } from 'bits-ui';
	export let variant: 'primary' | 'secondary' = 'primary';
	export let text: string = 'שמור את מקומך';
	export let href: string | null = null;
</script>

<Button.Root
	class={`flex items-center justify-center transition duration-300 text-lg px-5 py-2 rounded-full ${variant === 'primary' ? 'bg-light-green text-dark-green hover:bg-light-green/70' : 'bg-dark-green text-light-green hover:bg-light-green hover:text-dark-green'} `}
	{href}
>
	{text}
</Button.Root>
