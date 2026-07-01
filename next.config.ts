import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: "/insights", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
