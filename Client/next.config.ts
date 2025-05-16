import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "designer.mocky.io",
      },
    ],
  },
};

export default nextConfig;
