module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended'],
  parser: '@typescript-eslint/parser', // 搭配 @typescript-eslint 使用，解析规则
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 启用其他新特性 JSX
    },
    ecmaVersion: 2018, //  === 9 ,支持 ES2018 及之前的语法
    sourceType: 'module', // 是 ECMAScript module 里的代码
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // 匹配已安装的 react 版本，未来会自动设置
    },
  },
  rules: {},
}
