import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Optimize for modern CSS and performance
  css: {
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/theme.css";`
      }
    }
  },
  
  // Build optimization
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['react-router-dom']
        }
      }
    }
  },
  
  // Server configuration for better development
  server: {
    port: 3000,
    open: true, // Automatically open browser
    cors: true
  },
  
  // Preview configuration
  preview: {
    port: 4173,
    host: true
  }
});
