// @ts-check

/** @type {Partial<import('stylelint').Configuration>} */
const config = {
  extends: [
    // As of 2020/03/18, stylelint-config-airbnb is still at v0.0.0
    // Is this future proof?
    // https://github.com/airbnb/css/pull/56
    'stylelint-config-airbnb',

    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended'
  ],

  rules: {
    'order/order': null
  }
};

module.exports = config;
