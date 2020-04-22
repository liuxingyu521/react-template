// babel config function 参见：https://babeljs.io/docs/en/config-files#config-function-api
module.exports = (api) => {
  // 此配置只会动态计算一次，导出静态对象给 babel 使用
  api.cache(true)

  return {
    // 预设 => 一些转换插件的集合
    presets: [
      [
        '@babel/env', // 仅转译代码里使用的浏览器支持的新特性，其他特性需要额外安装 plugins
        {
          useBuiltIns: 'usage', // 在代码中使用到环境中没有的特性时，自动载入需要的 polyfill 代码
          corejs: {
            version: 3,
            proposals: true, // 所有建议的特性都用 corejs 的代码来polyfill
          },
        },
      ],
    ],
    // 单独配置插件
    plugins: [
      // 将每个文件里用到的公共方法函数，都从 @babel/runtime 里导出，
      // 去掉每个文件的重复函数，减少打包体积
      '@babel/plugin-transform-runtime',
    ],
  }
}
