import type { Config } from 'tailwindcss'

export default {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '2112px',
        '4xl': '2560px'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      height: {
        '6/7': '85%',
      }
    }
  },
  plugins: []
} satisfies Config
