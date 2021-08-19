import { resolve } from 'path'
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const pathResolve = dir => resolve(__dirname, '.', dir)

// https://vitejs.dev/config/
const config = ({ mode }) => {
  // 生产环境判断
  const isEnvProduction = mode === 'production'
  return defineConfig({
    base: './',
    plugins: [vue()],
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 2048,
      cssCodeSplit: true,
      minify: isEnvProduction ? 'terser' : 'esbuild',
      terserOptions: {
        compress: {
          drop_console: isEnvProduction
        }
      },
      brotliSize: false,
      chunkSizeWarningLimit: 2000
    }
  })
}

export default config
