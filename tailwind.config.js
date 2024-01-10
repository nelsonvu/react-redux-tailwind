// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const tokens = require(path.join(__dirname, './tokens.json'));

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'gray-1': '#EFF4FA',
        'gray-2': '#8F9BB3',
        'gray-3': '#757575',
        'gray-4': '#404040',
        'gray-5': '#404040',
        'gray-6': '#0A0A0A',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
      },
      screens: {
        md: tokens.screens.md,
        lg: tokens.screens.lg,
        xl: tokens.screens.xl,
      },
      fontSize: {
        tx10: ['.625rem', '0.781rem'],
        tx12: ['.75rem', '0.938rem'],
        tx14: ['.875rem', '1.203rem'],
        tx16: ['1rem', '1.5rem'],
        tx18: ['1.125rem', '1.688rem'],
        tx20: ['1.25rem', '1.875rem'],
        tx22: ['1.375rem ', '2.063rem'],
        tx26: ['1.625rem', '2.438rem'],
        tx30: ['1.875rem', '2.578rem'],
        tx36: ['2.25rem', '3.094rem'],
        tx40: ['2.5rem', '3.438rem'],
        tx48: ['3rem', '4.125rem'],
        tx56: ['3.5rem', '4.375rem'],
        tx64: ['4rem', '5rem'],
      },
    },
  },
  plugins: [],
};
