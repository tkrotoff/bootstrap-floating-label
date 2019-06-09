// @ts-check

module.exports = {
  extends: [
    // As of 2019/05/24, npm package stylelint-config-airbnb is still at v0.0.0
    // and has not seen a release for a year
    // See https://github.com/airbnb/css/pull/56
    'stylelint-config-airbnb',

    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended'
  ],

  rules: {}
};
