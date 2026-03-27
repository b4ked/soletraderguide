import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable trailing slashes to avoid duplicate URL indexing
  trailingSlash: false,

  // Include the /drafts directory in the Vercel serverless bundle so the
  // admin dashboard API can read draft files at runtime via fs.readFileSync
  outputFileTracingIncludes: {
    '/api/admin/drafts': ['./drafts/**'],
  },

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
