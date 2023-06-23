import { defineConfig } from 'vite'
import EsLint from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

const { EsLinter, linterPlugin } = EsLint

export default defineConfig((configEnv) => ({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
      name: '@kreattix/web',
    },
    minify: 'esbuild',
    rollupOptions: {
      external: /^lit/,
    },
    sourcemap: true,
  },
  envPrefix: 'KREATTIX',
  plugins: [
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx,js,jsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
}))
