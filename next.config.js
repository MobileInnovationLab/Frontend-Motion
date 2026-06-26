/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.motionlaboratory.com",
      },
      {
        protocol: "http", 
        hostname: "admin.motionlaboratory.com",
      },
    ],
  },
};

module.exports = nextConfig;
