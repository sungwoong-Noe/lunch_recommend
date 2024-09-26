import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    '~/plugins/vuetify.ts'],
  // server: {
  //   https: {
  //     key: fs.readFileSync('./cert/server.key'),
  //     cert: fs.readFileSync('./cert/server.cert')
  //
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
