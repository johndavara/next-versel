/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone:true // hace que la imagen sea mas pequeña
  }
}

module.exports = nextConfig
