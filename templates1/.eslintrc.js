module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 方法前面是否有空格
    'space-before-function-paren': ['warn', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    // 对象数组后面要加逗号
    'comma-dangle': ['warn', 'always-multiline'],
    // 要求使用 let 或 const 而不是 var
    'no-var': 'warn',
    // const声明的变量禁止重新赋值
    'no-const-assign': 'warn',
  },
}
