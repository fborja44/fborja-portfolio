/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['"League Spartan"', 'ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
		},
		extend: {
			fontFamily: {
				'league-spartan': ['"League Spartan"', 'sans'],
			},
			letterSpacing: {
				widerest: '.2em',
			},
			lineHeight: {
				default: 'normal',
			},
			colors: {
				neon: '#DBFF00'
			}
		},
	},
	plugins: [],
};
