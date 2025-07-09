import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AlgoLoadBalancer/', // ✅ Add this line
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
    allowedHosts: true
  }
})
  