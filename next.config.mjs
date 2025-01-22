/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["healthymindrespati.my.id"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "healthymindrespati.my.id",
      },
    ],
  },
};

export default nextConfig;
