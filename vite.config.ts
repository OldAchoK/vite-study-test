import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_URL || '/'

  return {
    plugins: [react()],
    base,
    input: {
      main: resolve(import.meta.dirname, 'index.html'),
      about: resolve(import.meta.dirname, 'about.html'),
    },
  }
})
