import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/it", destination: "/", permanent: true },
      { source: "/en", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
