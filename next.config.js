/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    output: 'standalone',
    // This will ensure more consistent behavior between development and production
    webpack: (config) => {
      // Only modify what we need to fix the case sensitivity issues
      config.resolve.symlinks = false;
      
      return config;
    }
  }
  
  module.exports = nextConfig;