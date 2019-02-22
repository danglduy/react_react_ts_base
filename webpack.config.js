const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const HappyPack = require('happypack')
const TerserPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

// Initialize dotenv
dotenv.config()

const __DEV__ = process.env.NODE_ENV !== 'production'
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 9000

const target = 'web'

const mode = __DEV__ ? 'development' : 'production'

const cache = true

const context = __dirname

const devtool = __DEV__ ? 'eval-source-map' : 'source-map'

const entry = {
  bundle: './src/index.tsx'
}

const output = {
  path: path.resolve(__dirname, './dist/'),
  filename: '[name].[hash].js',
  chunkFilename: '[name].[chunkHash].js',
}

const rules = [
  {
    test: /\.css?$/,
    loader: 'happypack/loader?id=css',
  },
  {
    test: /\.(tsx?)|(js)$/,
    exclude: /node_modules/,
    loader: 'happypack/loader?id=ts',
  },
]

const plugins = [
  new webpack.DefinePlugin({
    'process.env': Object.keys(process.env).reduce((envObj, key) => {
      envObj[key] = JSON.stringify(process.env[key])
      return envObj
    }, {}),
  }),
  new CleanPlugin([output.path]),
  new HappyPack({
    id: 'ts',
    threads: 4,
    loaders: [
      {
        path: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ]
  }),
  new HappyPack({
    id: 'css',
    threads: 2,
    loaders: [
      'style-loader',
      'css-loader',
    ]
  }),
  new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true, tslint: true }),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, './public/index.html'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyURLs: true,
    },
  }),
  new InterpolateHtmlPlugin({
    ...process.env,
    publicPath: output.publicPath,
  }),
  new CopyPlugin([{ from: './public', to: './' }], {
    ignore: ['index.html'],
  }),
  new WebpackBuildNotifierPlugin({
    suppressCompileStart: false,
    suppressSuccess: false,
  }),
]

const alias = {
  '~': path.resolve(__dirname, 'src'),
}

const extensions = ['.ts', '.tsx', '.js', '.json']

const minimizer = __DEV__ ? [] : [
  new TerserPlugin({
    cache: false,
    parallel: true,
    sourceMap: true,
    extractComments: true,
  })
]

const splitChunks = {
  name: false,
  chunks: 'initial',
  minSize: 150000,
  minChunks: 2,
  maxAsyncRequests: Infinity,
  maxInitialRequests: Infinity,
  cacheGroups: {
    react: {
      name: 'react',
      // Every module with a name which starts with react
      test: /\/node_modules\/react/,
      chunks: 'initial',
      enforce: true,
    },
    vendor: {
      name: 'vendor',
      // Everything else
      test: /\/node_modules\/(?!react)/,
      chunks: 'initial',
      enforce: true,
    },
  },
}

const optimization = {
  minimizer,
  splitChunks,
}

const performance = {
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
}

const devServer = {
  port: PORT,
  host: HOST,
  contentBase: '/',
  publicPath: output.publicPath,
  historyApiFallback: true,
  disableHostCheck: true,
  noInfo: false,
  lazy: false,
  filename: 'bundle.js',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  hot: true,
  stats: { colors: true },
  headers: { 'Access-Control-Allow-Origin': '*' },
}

module.exports = {
  mode,
  target,
  context,
  devtool,
  entry,
  cache,
  output,
  module: {
    rules,
  },
  plugins,
  resolve: {
    alias,
    extensions,
  },
  optimization,
  performance,
  devServer,
}
