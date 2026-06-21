import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webeto.co",
      },
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
      },
      {
        protocol: "https",
        hostname: "toprayan.com",
      },
      {
        protocol: "https",
        hostname: "padmira.ir",
      },
    ],
  },
};

export default nextConfig;
