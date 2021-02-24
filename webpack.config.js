const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.pug' })
  ],
  devServer: { open: true, contentBase: 'public' },
  devtool: 'eval-cheap-source-map',
  mode: 'development',
}
