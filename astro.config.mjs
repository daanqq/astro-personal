import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: vercel(),
});
