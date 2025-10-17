/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sharehouse-nodoka' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sharehouse-nodoka' : '',
}

module.exports = nextConfig
