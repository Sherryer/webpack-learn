let { SyncHook, AsyncParallelHook } = require('tapable')

class Lession {
    constructor() {
        this.hooks ={
            arch: new AsyncParallelHook(['a'])     // 创建一个勾子
        }
    }
    start() {   //  启动勾子方法
        this.hooks.arch.callAsync('传给方法的值们', () => {
            console.log('end')
        })
    }
    tap() {     //  注册勾子
        this.hooks.arch.tapAsync('name1', (value, cb) => {            //  tap 注册方法 第一个参数无意义，第二个是回调
            console.log(value)
            setTimeout(cb, 1000)
        })
        this.hooks.arch.tapAsync('name2', (value, cb) => {
            console.log(value)
            setTimeout(cb, 2000)
        })
    }
}

var l = new Lession()
l.tap()
l.start()   // 启动钩子
