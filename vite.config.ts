import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPaths(), dts()],
  build: {
    lib: {
      entry: './lib/index.ts',
      name: '@kreattix/web',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return `kreattix-web.js`
        return `kreattix-web.${format}.js`
      }
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'kreattix-icons.css'
          }
          return assetInfo.name || ''
        }
      }
    },
    sourcemap: true,
    minify: 'esbuild'
  }
})
