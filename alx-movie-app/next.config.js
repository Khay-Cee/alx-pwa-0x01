const withPWAInit = require('@ducanh2912/next-pwa');

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: 'public'
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

module.exports = withPWA({
  ...nextConfig
});
