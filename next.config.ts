import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    // Force case-sensitive paths to prevent deployment issues
    config.resolve = {
      ...config.resolve,
      symlinks: false,
      // Make webpack case-sensitive when resolving modules
      alias: {
        ...config.resolve?.alias,
      },
    };

    // Add rules to enforce case sensitivity
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: ['case-sensitive-paths-webpack-plugin'],
      });
    }

    return config;
  },
  // Ensure output tracing for serverless functions respects case
  experimental: {
    // Removed invalid property as it is not supported in 'ExperimentalConfig'
  }
};

export default nextConfig;