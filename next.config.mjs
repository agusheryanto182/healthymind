/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "healthymindrespati.my.id",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
