// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://kuragestudios.github.io/just-maths/
// If you attach a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://kuragestudios.github.io',
  base: '/just-maths',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
