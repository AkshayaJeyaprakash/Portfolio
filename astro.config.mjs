// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at https://akshayajeyaprakash.github.io/Portfolio/
// If you move to a custom domain or a <user>.github.io repo, set `base: '/'`.
export default defineConfig({
  site: 'https://akshayajeyaprakash.github.io',
  base: '/Portfolio/',
  // Hide Astro's dev-only toolbar (it never appears on the published site anyway).
  devToolbar: { enabled: false },
});
