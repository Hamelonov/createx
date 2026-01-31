import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({command}) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/createx/' : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/helpers" as *;`
        }
      }
    }
  }
})
