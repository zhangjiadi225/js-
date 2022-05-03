Function.prototype.myCall = function (obj, ...args) {
    //确保this  传入对象类型
    obj = obj ? Object(obj) : window
    //调用需要被执行的函数
    obj.fn = this
    let result = obj.fn(...args)
    delete obj.fn
    return result
}


Function.prototype.myApply = function (obj, args) {
    obj = obj ? Object(obj) : window
    // Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this
    // 执行，返回执行值
    return obj[fn](...args)
}

Function.prototype.myBind = function (obj, ...args) {
    obj = obj ? Object(obj) : window
    const fn = Symbol()
    obj[fn] = this
    const _this = this
    const res = function (...innerArgs) {
        console.log(this, _this)
        if (this instanceof _this) {
            this[fn] = _this
            this[fn](...[...args, ...innerArgs])
            delete this[fn]
        }
        else {
            obj[fn](...[...args, ...innerArgs])
            delete obj[fn]
        }
    }
    res.prototype = Object.create(this.prototype)
    return res
}
