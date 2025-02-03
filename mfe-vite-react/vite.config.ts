/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    federation({
      name: 'mfeViteReact',
      remoteType: 'module',
      filename: 'remoteEntry.js',
      exposes: [
        { './ClientesPage': './src/pages/ClientesPage' },
        { './CriarClientePage': './src/pages/CriarClientePage' }
      ],
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext'
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
