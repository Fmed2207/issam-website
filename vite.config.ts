import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      // Lazy-load Express to avoid blocking Vite startup
      server.middlewares.use((req, res, next) => {
        // Only handle /api routes with Express
        if (req.url?.startsWith("/api")) {
          import("./server").then(({ createServer }) => {
            const app = createServer();
            app(req, res, next);
          });
        } else {
          next();
        }
      });
    },
  };
}
