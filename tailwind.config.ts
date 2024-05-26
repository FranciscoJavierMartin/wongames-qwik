import type { Config } from 'tailwindcss';
import wongamesTheme from './src/wongames-theme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [wongamesTheme],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
