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
        auth: 'auth@http://localhost:8082/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js'
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

module.exports = merge(commonConfig, devConfig);
