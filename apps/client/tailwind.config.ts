import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      opacity: {
        '75': '.75'
      }
    },
    colors: {
      background: 'var(--background)',
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      textColor: 'var(--text-color)',
      accentColor: 'var(--accent-color)'
    },
    screens: {
      xxsm: '460px',

      xsm: '568px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px'
    },
    fontFamily: {
      vazir: ['var(--font-vazir-regular)']
    },
    opacity: {
      '75': '.75'
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
