module.exports = {
  plugins: ['ava', 'compat', 'import', 'security', 'flowtype'],
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
    'plugin:flowtype/recommended',
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
