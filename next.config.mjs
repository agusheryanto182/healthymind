/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["healthymindrespati.my.id"],
  },
};

export default nextConfig;
