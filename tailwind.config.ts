import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        petal: {
          50: '#fff1f5',
          100: '#ffe4ed',
          200: '#ffccd9',
          300: '#ffa6b8',
          400: '#ff7a97',
          500: '#f45b77',
          600: '#dd3f5f',
          700: '#b92f4f',
          800: '#942742',
          900: '#7a2038',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(115, 90, 95, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
