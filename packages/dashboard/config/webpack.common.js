const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};
