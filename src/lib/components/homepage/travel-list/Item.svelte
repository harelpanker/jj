<script lang="ts">
	import { Image } from '@unpic/svelte';

	import placeholder from '$lib/assets/placeholder.jpg';

	export let title: string;
	export let text: string;
	export let isOdd: boolean;
	export let length: string;
	export let price: number;
	export let id: string;
	export let src: string = placeholder;
</script>

<div
	class={`row relative flex flex-col gap-y-6 lg:flex-row lg:gap-x-20 items-center ${isOdd ? '' : 'lg:justify-end'}`}
>
	<figure
		class={`rounded-lg order-first lg:rounded-2xl overflow-hidden w-full lg:max-w-[50%] lg:shrink-0 lg:h-[70dvh] ${isOdd ? '' : 'lg:order-last'}`}
	>
		<Image class="w-full h-full object-cover" {src} alt={title} width={1920} height={1280} />
	</figure>
	<div class="flex flex-col gap-y-3 w-full max-w-md mx-auto">
		<h2 class="font-bold text-3xl lg:text-6xl">{title}</h2>
		<p>{text}</p>
		<div class="lg:flex">
			<div
				class="mt-4 p-2 lg:px-6 font-bold text-light-green w-full lg:w-auto bg-dark-green flex justify-around gap-x-6"
			>
				<div>
					<h3 class="text-lg">אורך טיול:</h3>
					<p class="text-xl">{length}</p>
				</div>
				<div>
					<h3 class="text-lg">סכום לאדם:</h3>
					<p class="text-xl">{price}€</p>
				</div>
			</div>
		</div>
	</div>
	<!-- id -->
	<div class="absolute w-full left-0 -top-20" {id}></div>
</div>
