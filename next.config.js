/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "**.unsplash.com"
      }
    ],
    formats: ['image/avif', 'image/webp'],
    placeholder: 'blur',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 7680, 5000],
  },
  async headers() {
    return [
      {
        source: '/isr',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=10, stale-while-revalidate=10',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
