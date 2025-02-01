import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  json: {
    stringify: true, // Ensures JSON files can be imported
  },
})
