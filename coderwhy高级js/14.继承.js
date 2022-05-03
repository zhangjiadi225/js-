//!call
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.say = function () {
//     console.log('Hello World')
// }

// function Star(name, age) {
//     Person.call(this, name, age) // Person.apply(this, [name, age])
// }

// const s = new Star('舒总', 18)
// console.log(s.name, s.age)
//!只是继承属性   在Star中使用Person实例


//!原型继承
// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
// Person.prototype.say = function () {
//     console.log('Hello World')
// }

// function Star(name, age) {
//     Person.call(this, name, age)
// }

// Star.prototype = new Person()
// Star.prototype.constructor = Star

// const s = new Star('舒总', 18)
// s.say()
//!使用prototype 然后new一个实例  在用prototype.constructor 赋值Star
//!污染了子类的原型，多挂载了没有意义的父类属性



//!组合继承 = Call 式继承（继承属性） + 原型继承（继承方法）



//!所谓寄生继承，就是把父类的原型“寄生”到新函数的原型上，再把新函数的实例赋值给子类的原型。
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function () {
    console.log('Hello World')
}

function Star(name, age) {
    Person.call(this, name, age)
}

Star.prototype = Object.create(Person.prototype)
// Star.prototype.constructor = Star   //配置
Object.defineProperty(Star.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Star
})

//封装函数
//!!!
function inheritPrototype(SubType, SuperType) {
    SubType.prototype = Object.create(SuperType.prototype)
    Object.defineProperty(SubType.prototype, "constructor", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}



Star.prototype.studying = function () {
    console.log('studying');
}

const s = new Star('舒总', 18)
console.log(s)



//判断是否自己的属性

// Object.hasOwnProperty


//  是否有属性  包括原型
// '属性' in  Object


//对构造函数原型检测是否存在在某对象原型链上     instanceof
