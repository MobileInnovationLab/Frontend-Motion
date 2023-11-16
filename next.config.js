/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "internship.acme.com",
            },
          ],
          destination: "/recruitment/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
