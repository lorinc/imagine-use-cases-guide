import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a subdirectory like github.io/repo-name
  // basePath: '/repo-name',
};

export default nextConfig;
