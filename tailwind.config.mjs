/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#00b3cd',
				secondary: '#00799c',
				'base-primary': '#fff',
				foreground: '#191919'
			}
		},
	},
	plugins: [],
}
