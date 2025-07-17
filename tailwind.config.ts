
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1D3557', // Professional Blue
					foreground: '#FFFFFF',
				},
				secondary: {
					DEFAULT: '#E63946', // Professional Red
					foreground: '#FFFFFF',
				},
				accent: {
					DEFAULT: '#FFD600', // Professional Yellow
					foreground: '#1D3557',
				},
				muted: {
					DEFAULT: '#F1FAEE',
					foreground: '#1D3557',
				},
				destructive: {
					DEFAULT: '#B00020',
					foreground: '#FFFFFF',
				},
				popover: {
					DEFAULT: '#F8F9FA',
					foreground: '#1D3557',
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#1D3557',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'cyber': ['Orbitron', 'monospace'],
				'matrix': ['Courier New', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
					}
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, #00FFFF 0%, #FF0080 50%, #8B00FF 100%)',
				'dark-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
