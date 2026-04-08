/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/services/av-installation', destination: '/services', permanent: true },
      { source: '/services/smart-home-automation', destination: '/services', permanent: true },
      { source: '/services/security-systems', destination: '/services', permanent: true },
      { source: '/services/networking-wifi', destination: '/services', permanent: true },
      { source: '/services/commercial-av', destination: '/services', permanent: true },
    ];
  },
};

module.exports = nextConfig;
