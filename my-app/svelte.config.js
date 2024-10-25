import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltePreprocess({
    postcss: true, // Enable PostCSS
    typescript: false, // Disable TypeScript processing
  }),
};
