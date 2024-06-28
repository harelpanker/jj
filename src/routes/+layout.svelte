<script>
	import '../app.css';
	import '@fontsource/alef/400.css';
	import '@fontsource/alef/700.css';
</script>

<div class="style_wrap font-alef bg-white">
	<div class="flex-1 flex flex-col">
		<!-- Header -->
		<main class="relative z-10 flex-1"><slot /></main>
	</div>
	<!-- <Footer /> -->
</div>

<style>
	.style_wrap {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
		min-height: 100dvh;
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 10;
	}
</style>
