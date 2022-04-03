// @ts-check

/** @type {Partial<import('stylelint').Config>} */
const config = {
  extends: [
    // /!\ Order matters: the next one overrides rules from the previous one

    // Extends stylelint-config-standard-scss which extends stylelint-config-recommended-scss
    'stylelint-config-twbs-bootstrap',

    'stylelint-prettier/recommended'
  ],

  rules: {
    'selector-no-qualifying-type': null,
    'no-invalid-position-at-import-rule': null
  }
};

module.exports = config;
