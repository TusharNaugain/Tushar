import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    /** If you set esmExternals to true, this plugins assumes that 
      all external dependencies are ES modules */
    commonjsOptions: {
       esmExternals: true 
    },
  },
  // Add the server configuration below
  server: {
    host: true, // This will make Vite listen on 0.0.0.0
    port: 5173, // Change the port if needed
  }
})
