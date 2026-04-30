import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network host for Next dev HMR access
  allowedDevOrigins: ["192.168.1.105"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
