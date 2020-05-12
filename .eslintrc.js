// @ts-check

/** @type {import('eslint').Linter.Config} */
const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {},
  extends: [
    // /!\ Order matters: the next one overrides rules from the previous one
    'plugin:jest/recommended',
    'airbnb',
    // Already done by Airbnb
    //'plugin:react/recommended'
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: ['simple-import-sort', 'react-hooks'],
  env: {
    browser: true
  },
  globals: {},

  rules: {
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    'spaced-comment': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    // [Avoid Export Default](https://basarat.gitbook.io/typescript/main-1/defaultisbad)
    'import/prefer-default-export': 'off',

    'simple-import-sort/sort': [
      'error',
      {
        // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/v5.0.2/src/sort.js#L3-L15
        groups: [
          // Side effect imports
          ['^\\u0000'],

          // Packages
          [
            // React first
            '^react$',
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter
            '^@?\\w'
          ],

          // Absolute imports and other imports such as Vue-style `@/foo`
          // Anything that does not start with a dot
          ['^[^.]'],

          // Relative imports
          [
            // https://github.com/lydell/eslint-plugin-simple-import-sort/issues/15

            // ../whatever/
            '^\\.\\./(?=.*/)',
            // ../
            '^\\.\\./',
            // ./whatever/
            '^\\./(?=.*/)',
            // Anything that starts with a dot
            '^\\.',
            // .html are not side effect imports
            '^.+\\.html$',
            // .scss/.css are not side effect imports
            '^.+\\.s?css$'
          ]
        ]
      }
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'jsx-a11y/label-has-associated-control': 'off',

    'react/no-unescaped-entities': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'jest/no-expect-resolves': 'error'
  }
};

module.exports = config;
