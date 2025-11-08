/** @type {import('next').NextConfig} */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ['app', 'scripts', 'tests'],
  },
  trailingSlash: true,
  // For GitHub Pages project sites, set basePath and assetPrefix (e.g. /YourRepoName)
  ...(repoBasePath
    ? {
        basePath: repoBasePath,
        assetPrefix: repoBasePath + '/',
      }
    : {}),
}

export default nextConfig
