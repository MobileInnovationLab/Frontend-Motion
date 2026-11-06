/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "standalone",
  images: {
    maximumResponseBody: 100000000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.motionlaboratory.com",
      },
      {
        protocol: "http", 
        hostname: "admin.motionlaboratory.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
