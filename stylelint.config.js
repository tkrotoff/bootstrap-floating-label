// @ts-check

/** @type {import('stylelint').Config} */
const config = {
  extends: [
    // /!\ Order matters: the next one overrides rules from the previous one

    // Extends stylelint-config-standard-scss which extends stylelint-config-recommended-scss
    'stylelint-config-twbs-bootstrap',

    'stylelint-prettier/recommended'
  ],

  rules: {
    // FIXME https://github.com/twbs/stylelint-config-twbs-bootstrap/issues/206
    'stylistic/string-quotes': null,
    'stylistic/number-leading-zero': null,

    'selector-no-qualifying-type': null,
    'no-invalid-position-at-import-rule': null
  }
};

module.exports = config;
