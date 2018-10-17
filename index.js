module.exports = {
  plugins: ['ava', 'import', 'security'],
  extends: [
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/legacy.js',
    './rules/node.js',
    './rules/style.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/importplugin.js',
    './rules/node-security.js',
    'plugin:ava/recommended',
    './rules/ava.js',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
