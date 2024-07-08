/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 1200,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/roster",
        headers: [
          {
            key: "Cache-Control",
            value: "nocache",
          },
        ],
      },
      {
        source: "/signups",
        headers: [
          {
            key: "Cache-Control",
            value: "nocache",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/roster',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig