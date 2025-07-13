import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://Fruit-Guardians.github.io',
  base: '/Api-Finder.wiki',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'python', 'bash', 'yaml', 'json'],
      wrap: true,
    },
  },
}); 