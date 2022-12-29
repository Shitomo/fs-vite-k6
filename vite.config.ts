import { defineConfig } from 'vite'
import path from 'path'
import babel from 'vite-plugin-babel';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/script.ts'),
      name: 'vite-k6',
      fileName: 'script'
    },
    rollupOptions: {
      external: ['k6', /^k6\/.*/]
    },
  },
  plugins: [
    babel(),
],
})
