/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // eslint-disable-next-line prettier/prettier
    domains: ['skoop-signage-storage-v2-dev.s3.amazonaws.com'], // Allow images
  },
};

module.exports = nextConfig;
