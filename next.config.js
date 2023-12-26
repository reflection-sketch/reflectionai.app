import withSvgr from 'next-plugin-svgr'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ahooks']
}

export default withSvgr(nextConfig)
