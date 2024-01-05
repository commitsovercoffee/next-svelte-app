/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkest: '#0F1035',
				darker: '#365486',
				normal: '#7FC7D9',
				light: '#DCF2F1'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
