var webpack = require('webpack');

module.exports = {
  entry: ['./app/index.js', 'webpack/hot/dev-server','webpack-dev-server/client?http://localhost:9999/'],
  // entry: ['./app/index.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.scss$/, loader: "style!css!sass"},
      // { test: /\.js$/, loader: 'babel loader?harmony' },
      // { test: /\.scss?$/, exclude: /node_modules/, loader: ["style","css!sass"]},
      // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=50000'},
      // { test: /\.(png|jpg)$/, loader: 'file-loader?limit=50000'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
