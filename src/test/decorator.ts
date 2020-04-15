function logDecorator(target, name, descriptor) {
  const func = descriptor.value;

  descriptor.value = (arg) => {
    console.log('before log')
    const ret = func.call(target, arg)
    console.log('after log')
    return ret
  }
}

export class Print {
  @logDecorator
  exec() {
    console.log("方法装饰器拦截测试")
  }
}