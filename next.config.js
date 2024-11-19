/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // eslint-disable-next-line prettier/prettier
    domains: ['skoop-signage-storage-v2-dev.s3.amazonaws.com','https://s3-alpha-sig.figma.com', 'octek-resource-profile-management.s3.us-east-1.amazonaws.com'], // Allow images
  },

   basePath: '/resource-profile-management-frontend',
};

module.exports = {
  basePath: '/resource-profile-management-frontend',
};
