module.exports = {
  rules: {
    'no-delete-var': 2,
    'no-self-assign': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef': 2,
    'no-unused-vars': [2, { argsIgnorePattern: '^_', args: 'after-used' }],
  },
};
