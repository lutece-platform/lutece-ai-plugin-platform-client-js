import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  server: {
    proxy: {
      '/rest': {
        target: process.env.DEMO_PROXY_TARGET || 'http://localhost:9191/lutece',
        changeOrigin: true
      },
      '/jsp': {
        target: process.env.DEMO_PROXY_TARGET || 'http://localhost:9191/lutece',
        changeOrigin: false
      }
    }
  },
  build: {
    target: 'es2022',
    outDir: 'webapp/js/lutecechat/dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: resolve(root, 'src/index.js'),
      name: 'LuteceChat',
      formats: ['es'],
      fileName: () => 'lutece-chat-bundle.js'
    },
    rolldownOptions: {
      output: {
        format: 'es',
        codeSplitting: false
      }
    }
  }
});
