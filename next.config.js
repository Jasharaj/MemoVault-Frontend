/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'readymadeui.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable server-side rendering for pages that use client-side features
  output: 'export',
  // Disable strict mode for development
  reactStrictMode: false,
}

module.exports = nextConfig
