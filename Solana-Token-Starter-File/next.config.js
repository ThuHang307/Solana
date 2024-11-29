/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  webpack(config) {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, 'src/components'),
      ...config.resolve.alias,
    };
    return config;
  },
  // experimental: {
  //  // esmExternals: false,
  // //  pagesDir: 'src/pages'
  // }
};

module.exports = nextConfig;
