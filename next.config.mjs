/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
  },

  // reactStrictMode is enabled by default in Next.js 13+, but keeping it explicit is fine
  reactStrictMode: true,

  // compress is enabled by default in Next.js, but keeping it explicit is fine
  compress: true,

};

export default nextConfig;