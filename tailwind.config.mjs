/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
		colors: {
			BG: "hsl(217, 54%, 11%)",
			cardBG: "hsl(216, 50%, 16%)",
			line: "hsl(215, 32%, 27%)",
			White: "hsl(0, 0%, 100%)",
			SoftBlue: "hsl(215, 51%, 70%)",
			Cyan: "hsl(178, 100%, 50%)",
		},
	},
	plugins: [],
}
