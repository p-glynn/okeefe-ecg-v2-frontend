import type { Config } from 'tailwindcss';
import base from '@okeefe-ecg-v2-frontend/config/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  presets: [base],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
