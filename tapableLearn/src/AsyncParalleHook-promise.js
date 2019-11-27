let { SyncHook, AsyncParallelHook } = require('tapable')

class Lession {
    constructor() {
        this.hooks ={
            arch: new AsyncParallelHook(['a'])     // 创建一个勾子
        }
    }
    tap() {     //  注册勾子
        this.hooks.arch.tapPromise('1', (value) => {            //  tap 注册方法 第一个参数无意义，第二个是回调
            console.log(value)
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 1000)
            })
        })
        this.hooks.arch.tapPromise('2', (value) => {
            console.log(value)
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 1000)
            })
        })
    }
    start() {   //  启动勾子方法
        this.hooks.arch.promise('传给方法的值们').then(() => {
            console.log('end')
        })
    }
}

var l = new Lession()
l.tap()
l.start()   // 启动钩子
