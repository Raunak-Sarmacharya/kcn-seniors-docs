/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Smart caching: shorter max-age with validation
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, stale-while-revalidate=600, must-revalidate',
          },
          // Add ETag support for cache validation
          {
            key: 'ETag',
            value: '"${Date.now()}"',
          },
        ],
      },
      // Special caching for documentation pages
      {
        source: '/docs/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=180, stale-while-revalidate=300, must-revalidate',
          },
        ],
      },
      // No caching for dynamic content
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
