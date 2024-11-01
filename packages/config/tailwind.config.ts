import type { Config } from 'tailwindcss';

// each package will be responsible for its own content
const tailwindConfig: Omit<Config, 'content'> = {
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
