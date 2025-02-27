/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'herpackinglist\\.com' },
      { protocol: 'http', hostname: 'localhost', port: '1337' },
      { protocol: 'https', hostname: 'kartinki\\.pics' },
      { protocol: 'https', hostname: 'i\\.pinimg\\.com' },
      { protocol: 'https', hostname: 'visitalay\\.com' },
      { protocol: 'https', hostname: 'herpackinglist\\.com' },
      { protocol: 'https', hostname: 'core-renderer-tiles\\.maps\\.yandex\\.net' },
      { protocol: 'https', hostname: 'photos\\.thetrek\\.c' },
      { protocol: 'https', hostname: 'photos\\.thetrek\\.co' },
      { protocol: 'https', hostname: 'static-cse\\.canva\\.com' },
    ],
  },
};

module.exports = nextConfig;
