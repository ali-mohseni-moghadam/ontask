import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      background: 'var(--background)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      textColor: 'var(--text-color)',
      accentColor: 'var(--accent-color)'
    },
    screens: {
      xsm: '478px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px'
    },
    fontFamily: {
      vazir: ['var(--font-vazir-regular)']
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
