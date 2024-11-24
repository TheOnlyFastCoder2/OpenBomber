import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const setPath = (dir: string) => {
  return path.resolve(__dirname,dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "lib": setPath("./src/lib"),
      "assets": setPath("./src/assets"),
      "components": setPath("./src/lib/components"),
      "ui": setPath("./src/lib/ui"),
    }
  }
})