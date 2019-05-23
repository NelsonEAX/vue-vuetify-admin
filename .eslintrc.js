module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-param-reassign': 0,
    'no-param-reassign': ['error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state']
      }],
    'arrow-parens': ['error', 'as-needed'],
    // 'arrow-body-style': ['error', 'never'],
    'comma-dangle': ['error', {
      arrays: 'never'
      // 'objects': 'never',
      // 'imports': 'never',
      // 'exports': 'never',
      // 'functions': 'ignore',
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
