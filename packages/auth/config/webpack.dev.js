const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const host = 'localhost';
const port = 8082;

const devConfig = {
  mode: 'development',
  output: {
    // If publicPath is not set the host of the remaining files
    // will be the same as the remoteEntry file was loaded from.
    publicPath: `http://${host}:${port}/`
  },
  devServer: {
    port: port,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: { './AuthMount': './src/bootstrap' },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
