import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default (args) => {
  const generateScopedName = args.mode === 'production' ? '[hash:base64:5]' : '[local]__[hash:base64:2]';
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000
    },
    css: {
      modules: {
        generateScopedName
      }
    }
  });
};
