const path = require('path');
const webpack = require('webpack');

const envKeys = Object.keys(process.env).reduce((prev, next) => {
  if (next.startsWith('REACT_APP_')) {
    prev[`process.env.${next}`] = JSON.stringify(process.env[next]);
  }
  return prev;
}, {});

module.exports = {
  babel: {
    plugins: [
      "babel-plugin-styled-components"
    ]
  },
  webpack: {
    alias: {
      '@screens': path.resolve(__dirname, './src/screens'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@components': path.resolve(__dirname, './src/components'),
      '@enums': path.resolve(__dirname, './src/enums'),
      '@hoc': path.resolve(__dirname, './src/hoc'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@store': path.resolve(__dirname, './src/store'),
      '@api': path.resolve(__dirname, './src/api'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
    ],
  },
};
