/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  transpilePackages: ['antd', '@ant-design/icons'],
};

module.exports = nextConfig;
