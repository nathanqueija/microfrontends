const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: { port: 8081, historyApiFallback: { index: 'index.html' } },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: { './MarketingMount': './src/bootstrap' },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);