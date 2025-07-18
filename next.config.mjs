/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Убираем basePath для Vercel, он нужен только для GitHub Pages
  // basePath: process.env.NODE_ENV === 'production' ? '/vila' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/vila/' : '',
}

export default nextConfig
