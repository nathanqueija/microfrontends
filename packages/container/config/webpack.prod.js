const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/container/latest/',
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@https://${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@https://${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@https://${domain}/dashboard/latest/remoteEntry.js`
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies.react
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom']
        }
      }
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
