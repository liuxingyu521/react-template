function pageLoad() {
  ;[1, 2, 3].forEach((item) => {
    console.log(item)
  })
}

// 测试 babel 转译插件
console.log(Array.isArray('array'))
console.log([1].includes(1))
console.log('string'.padEnd(4))

pageLoad()
