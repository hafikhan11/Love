import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages base path (remove this for Vercel)
  basePath: process.env.GITHUB_PAGES === "true" ? "/Love" : "",
};

export default nextConfig;
