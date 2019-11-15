import './index.css'
import './less.less'

import demo from './demo'

// es6
let fn = () => {
    console.log(123123)
}
fn()

// es7
@log
class A {
    a = 1
}

function log(item) {
    console.log(item)
}

var a = new A()
console.log(a.a)


// 需要
var bool = '123'.includes('1')
console.log(bool)


console.log(demo)
