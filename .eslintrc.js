module.exports = {
  env: {
    browser: true,
    jest: true,
  },

  extends: ['prettier'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'consistent-return': ['off'],
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: ['**/*.ts'],
    //   },
    // ],
    'import/no-unresolved': 'off',
    'no-console': ['error'],
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    'prettier/prettier': 'error',
  },

  settings: {},
};
