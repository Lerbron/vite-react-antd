import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import vitePluginImp from 'vite-plugin-imp'
import usePluginImport from 'vite-plugin-importer'
import compressPlugin from 'vite-plugin-compression'
import antdDayjs from 'antd-dayjs-vite-plugin';
import path from 'path'
import proxy from './config/proxy.js'

const NODE_ENV = process.env.NODE_ENV // 环境变量

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    usePluginImport({
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/lib/${name}/style/index.less`,
    //     },
    //   ],
    // }),
    compressPlugin(),
    antdDayjs()
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  server: {
    port: 3001,
    proxy: proxy[NODE_ENV]
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src')
    }
  },
})