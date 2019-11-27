var babylon = require('babylon')
var types = require('@babel/types')
var generator = require('@babel/generator').default
var traverse = require('@babel/traverse').default
var fs = require('fs')
var path = require('path')

function getPath(sourcePath) {
    return path.resolve(__dirname, sourcePath)
}

let file = fs.readFileSync(getPath('./entry.js'), 'utf8')

let ast = babylon.parse(file)

// console.log(ast)
traverse(ast, {
    CallExpression(p) {
        let node = p.node   // 固定写法 通过 CallExpression ， p.node 遍历节点。在每个节点下写判断
        if (node.callee.name === 'demo'){   // 设置 callee 可以直接改
            node.callee.name = 'demo2'
        }

        if (node.callee.name === 'require') {   // 设置 arguments 需要 types.stringLiteral
            if (node.arguments[0].value === './a') {
                node.arguments = [types.stringLiteral('./b')]
            }
        }
    }
})

let source = generator(ast).code

fs.writeFile(getPath('./output.js'), source, e => {
    if (e) {
        console.log('write output.js err: ', e)
        return
    }
    console.log('write output.js finished')
})

// console.log(source)
