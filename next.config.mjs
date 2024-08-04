/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
};

export default nextConfig;
