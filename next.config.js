/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          poll: 500,
          aggregateTimeout: 200,
          ignored: /node_modules/,
        }
      }
      return config
    },
  }
  
  module.exports = nextConfig