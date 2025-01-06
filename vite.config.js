import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path"
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(),'src/assets/icons')], // 需要缓存的图标文件夹
      symbolId: 'icon-[name]', //svg图标ID格式
    })
  ],
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
  },
  base:'./',
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       // 此处的写法，目的是为了 将/api 替换成 http://localhost:3000
  //       target: "http://localhost:3000",
  //       //是否跨域
  //       changeOrigin: true,
  //       //路径重写 下面示例为 将 /api 替换成空
  //       pathRewrite: {
  //         "^/api": "/api",
  //       },
  //     },
  //   },
  // },
})
