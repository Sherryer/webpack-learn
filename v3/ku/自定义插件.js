//这个是在原型上面开发的
jQuery.fn.extend({
    "haha": function () {
        alert(1);
        $(this).html('成功开发了插件');
        return $(this)
}

//挂到jquery对象上
,'heng': function () {
        alert(2);
        return $(this)
    },"xi":function(){
        alert('嘻嘻')
    }})
;

//工具方法 这种插件一般用来处理数组 json 遍历对象
jQuery.extend({
    'test':function(){

    }
});
//3扩展原油插件


