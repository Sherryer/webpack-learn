module.exports =  class {
  constructor (a) {
    console.log(123123, a)
  }
  apply (compiler) {
    // console.log(444, compiler.hooks)
    compiler.hooks.done.tap('testPlugin', () => {
      console.log('Hello World!333');
    });
    compiler.hooks.compilation.tap('testPlugin', (compilation) => {
      console.log('do again')
    })
  }
}
