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
  async rewrites() {
    return [
      {
        source: "/recruitment",
        destination: "https://internship.motionlaboratory.com",
      },
    ];
  },
};

module.exports = nextConfig;
