import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'dw-labs-site-34841808a1f5.herokuapp.com',
      '.herokuapp.com'
    ]
  }
})
