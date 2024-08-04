import react from '@vitejs/plugin-react'
import path from "path"
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@apis": path.resolve(__dirname, "./src/apis"),
      "@data": path.resolve(__dirname, "./src/data"),
    }
  }
})
