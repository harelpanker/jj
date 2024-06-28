<script lang="ts">
	import { Image } from '@unpic/svelte';
	import Container from '$lib/components/ui/Container.svelte';
	import PaddingX from '$lib/components/ui/PaddingX.svelte';

	import placeholder from '$lib/assets/placeholder.jpg';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<section class="bg-dark-green text-light-green relative z-20">
	<PaddingX>
		<Container>
			<div class="flex flex-col min-h-dvh gap-y-6 2xl:gap-y-9 py-5 lg:py-12 2xl:py-16">
				<figure
					class="w-full h-[60vh] overflow-hidden rounded-xl lg:rounded-3xl border border-light-green/50"
				>
					<Image
						class="w-full h-full object-cover"
						src={placeholder}
						alt=""
						priority
						width={1920}
						height={1280}
					/>
				</figure>
				<div class="flex flex-col gap-y-9">
					<div class="flex flex-col gap-y-2">
						<h1 class="font-bold text-5xl lg:text-7xl 2xl:text-9xl text-balance">
							אוסטריה עם יעקב
						</h1>
						<p class="text-lg lg:text-2xl text-pretty">
							סיורים מודרכים ברחבי אוסטריה, המדינות השכנות ואיסוף משדה התעופה
						</p>
					</div>
					<div class="flex"><Button /></div>
				</div>
			</div>
		</Container>
	</PaddingX>
</section>
