/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.youtube.com'],
  },

  experimental: {
    // Ensure legacy JS is avoided
    legacyBrowsers: false,
    // Optional: enable the new app directory if you're not already using it
    appDir: true,
  },

  swcMinify: true, // Ensure JS is minified using SWC (fastest available)

  reactStrictMode: true, // Help catch potential rendering issues

  // Enable gzip or Brotli compression if deployed behind custom server (e.g., Express)
  compress: true,

  webpack(config, { isServer }) {
    // Optional: reduce lodash bundle size
    config.resolve.alias['lodash'] = 'lodash-es';

    // Optional: Visualize bundle if needed
    // if (!isServer) {
    //   const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    //   config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    // }

    return config;
  },
};

export default nextConfig;
