import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Load env file based on mode from project root
  const envFile = mode === 'production' ? '../.env.prod' : '../.env.dev'
  const rootDir = path.resolve(__dirname, '..')
  
  // Load the environment variables
  const env = loadEnv(mode, rootDir, '')
  
  return {
    plugins: [react()],
    server: {
      port: 3001,
    },
    define: {
      // Expose specific env vars to the client
      __API_URL__: JSON.stringify(
        mode === 'production' 
          ? 'http://138.197.72.196:3000' 
          : 'http://localhost:3000'
      ),
      __GRAPHQL_URL__: JSON.stringify(
        mode === 'production' 
          ? 'http://138.197.72.196:3000/graphql' 
          : 'http://localhost:3000/graphql'
      ),
    }
  }
})