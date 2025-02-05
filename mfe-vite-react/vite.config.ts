/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { federation } from '@module-federation/vite'
import path from 'path'

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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  build: {
    target: 'esnext',
    minify: false
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.tsx', 'src/**/*.spec.tsx'],
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright'
    }
  }
})
