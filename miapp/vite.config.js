import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/eduviera1407.github.io/home/',
  plugins: [react()],
})
