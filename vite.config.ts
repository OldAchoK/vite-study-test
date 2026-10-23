import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://oldachok.github.io',
  input: {
    main: resolve(import.meta.dirname, 'index.html'),
    about: resolve(import.meta.dirname, 'about.html'),
  },
})
