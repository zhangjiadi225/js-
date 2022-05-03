Function.prototype.MyCall = function (obj, ...args) {
    obj = obj ? Object(obj) : window
    obj.fn = this
    let result = obj.fn(...args)
    delete obj.fn
    return result
}

Function.prototype.MyApply = function (obj, ...args) {
    obj = obj ? Object(obj) : window
    const fn = Symbol()
    obj[fn] = this
    let result = obj[fn](args)
    delete obj.fn
    return result
}

function currying(fn) {
    const len = fn.length
    return function curried() {
        const args = [...arguments]
        if (args.length >= len ) {
            return fn(...arguments)
        } else {
            return function () {
                return curried(...args,...arguments)
            }
        }
    }
}