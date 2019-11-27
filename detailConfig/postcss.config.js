module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer')
    ]
}

// precss

// PreCSS中的嵌套可以使用 & 符，把父选择器复制到子选择器中
// PreCSS使用 $ 符声明变量，比如 $color: #ccc
// PreCSS中用 @if 和 @else 来控制循环
// PreCSS中用 @define-mixin mixin_name $arg1,$arg2{...} 语法来声明混合宏
// PreCSS中用 @mixin mixin_name pass_arg1, pass_arg2; 语法来调用混合宏
// PreCSS中用 @mixin-content 保留传递内容
// PreCSS中使用 @define-extend extend_name{...} 来声明可扩展的代码块
// PreCSS中使用 @extend extend_name 语法来调用声明的代码扩展块
// PreCSS可以使用 @import 中导入CSS文件