let { SyncHook,  } = require('tapable')

class Lession {
    constructor() {
        this.hooks ={
            arch: new SyncHook(['a'])     // 创建一个勾子
        }
    }
    start() {   //  启动勾子方法
        this.hooks.arch.call(['哈哈', {a: 1}])
    }
    tap() {     //  注册勾子
        this.hooks.arch.tap('name1', (value) => {            //  tap 注册方法 第一个参数无意义，第二个是回调
            console.log(value)
        })
        this.hooks.arch.tap('name2', (value) => {
            console.log(value)
        })
    }
}

var l = new Lession()
l.tap()
l.start()   // 启动钩子
