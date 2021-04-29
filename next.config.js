// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  webpack(config) {
    config.plugins.push(new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }));

    return config;
  },
  images: {
    domains: ['picsum.photos', 'jordanbarbosa.com'],
  },
  future: {
    webpack5: true,
  },
};
