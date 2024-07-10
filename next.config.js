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
    const rd = [
      {
        source: '/',
        destination: '/roster',
        permanent: false,
      },
    ];

    if (process.env.SIGNUP_ENABLED != "1")
    {
      rd.push({ 
        source: '/signups',
        destination: '/roster',
        permanent: false,
      });
    }

    return rd;
  },
}

module.exports = nextConfig