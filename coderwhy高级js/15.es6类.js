class Person {
    constructor(name) {
        this.name = name
        this._add = '123'
    }
    running() {
        console.log(this.name, 'running');
    }
    //类的访问器    进行拦截等操作
    get add() {
        console.log(1);
        return this._add
    }
    set add(newval) {
        this._add = newval
    }
    //静  态    不需要new   就可以直接调用  Person.createPerson   类方法
    static createPerson() {
        return new Person(111)
    }
}

let p = new Person('zzz')
// p.running()

p.add = 1
console.log(p);

let p1 = Person.createPerson()



class Son extends Person {
    constructor(name,zzz) {
        super(name)
        this.zzz = zzz
    }
}