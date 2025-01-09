import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    devOptions: {
      enabled: true,
      type: 'module'
    },
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    registerType: 'autoUpdate',
    injectManifest: {
      swDest: 'dist/sw.js'
    },
    manifest: {
      name: "StyleSnap",
      short_name: "StyleSnap",
      description: "Virtual wardrobe app",
      icons: [{
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      }
      ],
      theme_color: '#171717',
      background_color: '#f0e7db',
      display: "standalone",
      scope: '/',
      start_url: "/",
      orientation: 'portrait'
    }
  })],
})
