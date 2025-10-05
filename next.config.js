/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.assets.peach-web.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: 'https://www.assets.peach-web.co.jp/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
