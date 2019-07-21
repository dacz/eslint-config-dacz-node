module.exports = {
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'arrow-spacing': [2, { before: true, after: true }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-var': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': [
      2,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-template': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': [2, 'after'],
  },
};
