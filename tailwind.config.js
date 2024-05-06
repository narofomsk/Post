/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url(https://avatars.dzeninfra.ru/get-zen-logos/5398874/pub_5b4d9aadbad75200a92fd661_649a90eedcad58030bc04b8b/xxh)",
				'footer-texture': "url('/img/footer-texture.png')",
			}
		},
	},
	plugins: [],
}
