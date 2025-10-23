/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // disables LightningCSS to avoid native module errors
  },
}

export default nextConfig
