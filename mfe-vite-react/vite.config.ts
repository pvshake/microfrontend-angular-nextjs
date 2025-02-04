/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    federation({
      name: 'mfeViteReact',
      dev: true,
      filename: 'remoteEntry.js',
      exposes: {
        './ClientesPageWC': './src/web-components/ClientesPageWC',
        './CriarClientePageWC': './src/web-components/CriarClientePageWC',
        './ConsultarClientePageWC':
          './src/web-components/ConsultarClientePageWC',
        './ClienteRetrievePageWC': './src/web-components/ClienteRetrievePageWC'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    target: 'esnext',
    minify: false
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
