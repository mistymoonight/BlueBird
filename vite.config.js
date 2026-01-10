import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: Replace 'YOUR_REPO_NAME' with your actual GitHub repository name
  // Example: if your repo is 'my-portfolio', set base to '/my-portfolio/'
  base: '/BlueBird/',
  // 确保public目录下的资源可以正确访问
  resolve: {
    alias: {
      // 配置别名，确保public目录下的资源可以正确访问
      '/videos': '/videos'
    }
  }
})
