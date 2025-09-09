/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'JBLabs',
    description: 'JBLabs Kasm Containers',
    icon: 'https://static.jblabs.net/logos/favicon.png',
    listUrl: 'https://jblabs-repo.github.io/kasm-registry/',
    contactUrl: 'https://jblabs.net',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
