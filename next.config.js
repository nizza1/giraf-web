/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })},
    images: {
      domains: ['cdn.sanity.io'],
    },
  };