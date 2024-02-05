import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'dark',
		'fill-facebook',
		'fill-youtube',
		'fill-twitter',
		'fill-instagram',
		'fill-linkedin',
		'fill-github',
		'fill-pinterest',
		'fill-whatsapp'
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			screens: {
				xs: '475px', // Extra kleine breakpoint
				tablet: '960px' // Extra kleine breakpoint
			},
			colors: {
				facebook: '#4267B2',
				youtube: '#FF0000',
				twitter: '#1DA1F2',
				instagram: 'rgb(228, 64, 95)', // Instagram heeft een gradiënt, dit is een benadering
				linkedin: '#0077b5',
				github: '#181717',
				pinterest: '#E60023',
				whatsapp: '#25D366',
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				default: ['system-ui']
			},
			// Voeg je eigen font-groottes toe
			fontSize: {
				'fs-small': ['clamp(.75rem, calc(.75rem + 0.04vw), 1rem)', '1rem'],
				'fs-normal': ['clamp(1rem, calc(1rem + 0.04vw), 1.25rem)', '1.5rem'],
				'fs-big': ['clamp(1.25rem, calc(1.25rem + 0.04vw), 1.5rem)', '1.75em'],
				'fs-headline-small': ['clamp(1.75rem, calc(1.75rem + 0.04vw), 2rem)', '2rem'],
				'fs-headline': ['clamp(2rem, calc(2rem + 0.04vw), 2.25rem)', '2.5rem'],
				'fs-headline-big': ['clamp(2.25rem, calc(2.25rem + 0.04vw), 2.5rem)', '2.75rem']
				// Voeg andere font-groottes toe
			},
			spacing: {
				sidebar: '33%',
				'padding-inline': '1rem',
				flow: '1rem'
				// ... andere spacing-waarden
			}
		}
	}
};

export default config;
