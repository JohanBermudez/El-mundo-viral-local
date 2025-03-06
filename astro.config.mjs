// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: netlify({
    // Hybrid mode with static fallbacks
    imageService: true,
    edgeMiddleware: true,
    functionPerRoute: false // Changed to false to handle dynamic routes better
  })
});
