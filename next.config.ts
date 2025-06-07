import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/resume',
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};

export default nextConfig;
