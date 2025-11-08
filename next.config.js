/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: '.next',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
