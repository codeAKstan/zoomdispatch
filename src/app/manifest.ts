import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZoomDispatch',
    short_name: 'ZoomDispatch',
    description: 'Fast, Reliable Delivery Service',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f7f5',
    theme_color: '#f97415',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
