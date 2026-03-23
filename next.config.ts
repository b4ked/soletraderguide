import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable trailing slashes to avoid duplicate URL indexing
  trailingSlash: false,

  // Compiler options
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimisation — allow external images if needed
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Redirect old blog URL patterns if migrating from WordPress
  // async redirects() {
  //   return [
  //     // Add WordPress redirect mappings here when migrating
  //   ]
  // },
};

export default nextConfig;
