const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const plugins = [[withBundleAnalyzer]];
const nextConfig = {
  webpack: (config, { webpack }) => {
    const prod = process.env.NODE_ENV === 'production';
    const newConfig = {
      ...config,
      mode: prod ? 'production' : 'development',
    };

    if (prod) {
      newConfig.devtool = 'hidden-source-map';
    }

    return newConfig;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://oms.modument.co.kr/:path*`,
      },
    ];
  },
};

module.exports = withPlugins(plugins, nextConfig);
