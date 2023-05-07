/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pokeapi.co",
        port: "",
        pathname: "/pokeapi.co/api/v2/**",
      },
    ],
  },
};

module.exports = nextConfig;
