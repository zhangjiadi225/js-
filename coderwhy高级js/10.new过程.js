function myNew(fn, ...args) {

    const obj = {}

    obj.__proto__ = fn.prototype

    fn.apply(obj, args)

    return obj
}

function Person(name, age) {
    this.name = name
    this.age = age
}

const res = myNew(Person, 1, 2)
console.log(res);