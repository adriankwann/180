// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export mode
  reactStrictMode: true,
  images: {
    unoptimized: true, // If using local images, set this to avoid image optimization issues
  },
};

export default nextConfig;
