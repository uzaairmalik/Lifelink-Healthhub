const { override, addWebpackPlugin } = require('customize-cra');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = override(
  config => {
    config.resolve.fallback = {
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      url: require.resolve('url/'),
      crypto: require.resolve('crypto-browserify'),
      assert: require.resolve('assert/'),
      zlib: require.resolve('browserify-zlib')
    };
    return config;
  },
  addWebpackPlugin(
    new ReactRefreshWebpackPlugin({
      overlay: false
    })
  )
);