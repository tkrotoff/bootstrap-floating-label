// @ts-check

/* eslint-disable global-require */

/** @type {import('postcss').ProcessOptions & {plugins: import('postcss').Plugin[]}} */
const config = {
  plugins: [require('postcss-preset-env')]
};

module.exports = config;
