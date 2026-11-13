import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from https://dani7368.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
