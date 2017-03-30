// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 控制逗号前后的空格
    'comma-spacing': [2, { 'before': false, 'after': true }],
    //2个空格
    'indent': ['error', 2],
    //不允许末尾有空格
    // 'skipBlankLines': 2,
    //结束jia;
    'semi': ['error', 'always'],
    //需要结束的逗号
    'comma-dangle': ['error', 'only-multiline'],
    //函数留空格
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'always',
      'asyncArrow': 'ignore'
    }],
  }
};
