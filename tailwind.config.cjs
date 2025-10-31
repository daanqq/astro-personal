/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ["system-ui, 'Segoe UI', Roboto, Arial, sans-serif", ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
