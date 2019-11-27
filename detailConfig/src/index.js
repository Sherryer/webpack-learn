import './index.css'
import './less.less'
import * as face from './face.jpg'
import * as React from 'react'
import { render } from 'react-dom'

console.log(2222, face)
console.log(3333, React)

render(<h2>hello</h2>, document.getElementById('dom'))

import com from './common'
console.log(com())

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


var img = document.createElement('img');
console.log('face', face)
img.src = face
document.body.appendChild(img)

// console.log(demo)


var btn = document.createElement('button')
btn.innerText ='btn ben b'
document.body.appendChild(btn)
btn.onclick = function () {
    import('./data.js').then(data => {
        btn.innerText = data.default.name
        console.log(data)
    })
}


