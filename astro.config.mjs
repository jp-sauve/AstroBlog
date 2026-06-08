// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://1029384756-astroblog.netlify.app/',
  integrations: [preact()],
});