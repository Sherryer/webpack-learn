/**
 * Created by Sherry on 2018/2/5.
 */
module.exports = function(content) {
    console.log(111)
    console.log(content)
    console.log(this.cacheable)
    this.cacheable && this.cacheable();
    this.value = content;
    console.log(this)
    console.log(222)
    return "module.exports = " + JSON.stringify(content);
}
module.exports.seperable = true;