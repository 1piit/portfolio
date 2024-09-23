import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fcf1e6',
        foreground: 'var(--foreground)',
        'tag-yellow': '#FEFAE7',
        'hyper-400': '#5533FF',
        'hyper-500': '#3A10E5',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
        mono: ['var(--font-space-mono)'],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
export default config;
