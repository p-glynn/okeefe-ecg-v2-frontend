import type { Config } from 'tailwindcss';
import sharedConfig from '@okeefe-ecg-v2-frontend/config-tailwind';

const config: Pick<Config, 'content' | 'presets'> = {
  presets: [sharedConfig],
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
};

export default config;
