import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'وبسایت شخصی رضا نیک‌روش',
        short_name: 'رضا نیک‌روش',
        description: "وبسایت شخصی رضا نیک‌روش. اینجا پروژه ها و مقالاتم رو با شما به اشتراک میزارم.",
        start_url: '/',
        display: 'standalone',
        "theme_color": "#202830",
        "background_color": "#202830",
        icons: [
            {
                "src": "/web-app-manifest-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "/web-app-manifest-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
            }
        ],
    }
}