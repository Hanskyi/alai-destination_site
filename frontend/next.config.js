/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'herpackinglist\\.com' },
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
