const path = require('path');
const DotEnv = require('dotenv');
const webpack = require('webpack');

const ENV = process.env.DEPLOY_ENV || 'dev';
const result = DotEnv.config({ path: `./.env.${ENV}` });

if (result.error) {
  throw result.error;
}

const env = DotEnv.config({ path: `./.env.${ENV}` }).parsed;
const envLocal = DotEnv.config({ path: './.env.local' }).parsed || {};

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next.trim()}`] = (envLocal[next]) ? JSON.stringify(envLocal[next].trim()) : JSON.stringify(env[next].trim());
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