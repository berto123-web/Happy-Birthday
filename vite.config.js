import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Happy-Birthday/',
  plugins: [react()],
  assetsInclude: ['**/*.MOV', '**/*.MP4'],
})
