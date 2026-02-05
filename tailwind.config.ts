import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'deep-black': '#0a0a0a',
                'emerald-accent': '#10b981',
                'deep-blue': {
                    DEFAULT: '#1e40af',
                    dark: '#1e3a8a',
                    glow: '#3b82f6',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'glow-pulse': 'glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glow: {
                    '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
                    '50%': { opacity: '0.8', filter: 'brightness(1.5) blur(2px)' },
                }
            }
        },
    },
}
