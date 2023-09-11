/** @type {import('next').NextConfig} */

const repositoryName = process.env.REPOSITORY?.split('/')[1];
const urlPrefix = repositoryName ? `/${repositoryName}` : '';

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
};

module.exports = nextConfig;
