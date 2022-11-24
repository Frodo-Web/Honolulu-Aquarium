const path = require('node:path');

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@lib': path.resolve(__dirname, 'lib/'),
      '@styles': path.resolve(__dirname, 'app/styles'),
      '@fonts': path.resolve(__dirname, 'app/fonts'),
      '@data': path.resolve(__dirname, 'app/localData'),
    };

    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;