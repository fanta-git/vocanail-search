/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: process.env.BASE_PATH || '',
  basePath: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nicovideo.cdn.nimg.jp',
        port: '',
        pathname: '/thumbnails/**',
      },
    ],
  },
}

module.exports = nextConfig
