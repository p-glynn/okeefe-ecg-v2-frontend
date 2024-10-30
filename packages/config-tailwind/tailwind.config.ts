import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  content: [],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'old-blue': '#24438e',
        'old-dark-blue': '#133283',
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
};

export default tailwindConfig;
