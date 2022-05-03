function show(_school, _class, _name) {
    return `学校：${_school}，班级：${_class}，姓名：${_name}`
}

const curry = (fn) => {
    const len = fn.length
    // 第 1 次肯定返回的是一个新函数
    return function temp() {
        const args = [...arguments]
        // 新函数调用完之后到底是执行 fn 还是继续返回新函数呢，取决于收集到的参数个数和 fn.length 的关系
        if (args.length >= len) {
            return fn(...args)
        } else {
            return function () {
                return temp(...args, ...arguments)
            }
        }
    }
}

const curryShow = curry(show)
const r = curryShow('传智')('64')('吕布')
console.log(r)

//vue3中的柯里化  渲染器中