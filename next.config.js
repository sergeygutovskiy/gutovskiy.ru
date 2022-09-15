/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },

  images: {
    domains: [
      'gutovskiy.ru',
      'sun9-8.userapi.com',
      'sun9-72.userapi.com',
      'sun9-79.userapi.com',
      'sun9-21.userapi.com',
      'sun9-10.userapi.com',
      'sun9-15.userapi.com'
    ],
  },
};

module.exports = nextConfig;
