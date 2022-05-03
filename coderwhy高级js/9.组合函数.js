//将函数组合来依次调用

function myCompose(...fns) {
    let length = fns.length
    //判断边界
    for (let i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
            //抛出一个类型异常  
            throw new TypeError('期望参数为函数')
        }
    }

    //组合
    function compose(...args) {
        let index = 0
        //判断是否有函数
        let result = length ? fns[index].apply(this, args) : args
        while (++index < length) {
            //结果为依次调用fns中的函数  index自增
            result = fns[index].call(this, result)
        }
        return result
    }
    return compose
}



//组合另一种

function myCompose(...fn) {
    if (fn.length === 0) return (num) => num
    if (fn.length === 1) return fn[0]
    return fn.reduce((pre, next) => {
        return (num) => {
            return next(pre(num))
        }
    })
}