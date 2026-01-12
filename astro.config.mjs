// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: 'https://annieliao.com',
  // No base path needed for custom domain
  base: '/',
  // Force static output for GitHub Pages deployment
  output: 'static'
});
