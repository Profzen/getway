/** @type {import('next').NextConfig} */
const nextConfig = {
  // Transpile local workspace packages that ship TypeScript/ESM source
  transpilePackages: ["@getway/ui"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
