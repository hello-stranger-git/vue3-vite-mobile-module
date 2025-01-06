import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src', //设置@指向src目录
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置全局scss文件（如变量、混入等）
        additionalData: `
          @use "@/assets/styles/mixins.scss" as *;
          @use "@/assets/styles/variables.scss" as *;
        `
      }
    },
  }
})
