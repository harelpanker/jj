/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				alef: 'Alef, sans-serif'
			}
		},
		colors: {
			'dark-green': '#232E26',
			'light-green': '#D9EFDE',
			white: 'F2F4F8'
		}
	},
	plugins: []
};
