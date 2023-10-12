import { defineConfig } from "vite";
import VuePlugin from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)


// https://vitejs.dev/config
export default defineConfig({
  base: './',
  plugins: [VuePlugin(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: resolve('src/components'),
      api: resolve('src/api'),
      views: resolve('src/views'),
      utils: resolve('src/utils'),
      routes: resolve('src/routes'),
      styles: resolve('src/styles'),
      model: path.resolve(__dirname, 'src/model'),
      store: path.resolve(__dirname, 'src/store'),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      less: {
        math: 'parens-division',
      },
    },
    modules: {
      localsConvention: 'camelCase'
    }

  },
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://127.0.0.1:7003/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});