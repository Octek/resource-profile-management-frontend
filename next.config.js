/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'], // Allow images from i.ibb.co
  },
};

module.exports = nextConfig;
