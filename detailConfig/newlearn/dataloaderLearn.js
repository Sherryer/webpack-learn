import com from '../src/common'
console.log(com())

var Dataloader = require('./dl20')

var loader = new Dataloader(cb)

function cb(args) {
    console.log('args', args)
    var arr = args.map(item => `${item} 的结果`)
    return Promise.resolve(arr)
}

loader.load(1).then(data => {console.log(data)})
loader.load(2).then(data => {console.log(data)})
loader.load(3).then(data => {console.log(data)})
loader.load(1).then(data => {console.log(data)})

console.log(111)


window.z = loader
