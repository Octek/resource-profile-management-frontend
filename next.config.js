/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // eslint-disable-next-line prettier/prettier
    domains: ['i.ibb.co'], // Allow images from i.ibb.co
  },
};

module.exports = nextConfig;
