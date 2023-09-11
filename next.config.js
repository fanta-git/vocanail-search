/** @type {import('next').NextConfig} */

const urlPrefix = process.env.BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  publicRuntimeConfig: { urlPrefix },
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
