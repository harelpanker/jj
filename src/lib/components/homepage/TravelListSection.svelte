<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import PaddingX from '../ui/PaddingX.svelte';
	import Item from './travel-list/Item.svelte';
	import { data } from './travel-list/data';
</script>

<section class="bg-light-green text-dark-green relative z-20">
	<PaddingX>
		<Container>
			<div class="flex flex-col min-h-dvh py-16 gap-y-9">
				<aside class="flex flex-wrap gap-2">
					{#each data as { title, href }}
						<a
							{href}
							class={`text-xs lg:text-sm rounded px-3 py-1 font-bold transition duration-300 hover:bg-dark-green/0 bg-dark-green/20`}
						>
							{title}
						</a>
					{/each}
				</aside>
				<div class="flex flex-col gap-y-12 lg:gap-y-36">
					<!-- item -->
					{#each data as { title, text, isOdd, length, price, id }}
						<Item {title} {text} {isOdd} {length} {price} {id} />
					{/each}
				</div>
			</div>
		</Container>
	</PaddingX>
</section>
