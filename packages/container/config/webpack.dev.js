const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJson = require('../package.json');

const host = 'localhost';
const port = 8080;

const devConfig = {
  mode: 'development',
  output: {
    // If publicPath is not set the host of the remaining files
    // will be the same as the remoteEntry file was loaded from.
    publicPath: `http://${host}:${port}/`
  },
  devServer: { port: port, historyApiFallback: true },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
