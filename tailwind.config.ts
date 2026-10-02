import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071d45',
        smuv: {
          50: '#ecfdf5',
          500: '#18b765',
          600: '#13a25b',
          700: '#0e7d4d'
        },
        sky: {
          50: '#edf6ff',
          100: '#dfeeff',
          200: '#bedcff',
          500: '#0d66c5',
          700: '#0b5ec5',
          900: '#051c3b'
        },
        ink: '#112537'
      },
      boxShadow: {
        soft: '0 16px 28px rgba(15,29,46,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
