//with 会形成作用域    调用时首先会查找当前with 行参

//作用   vue中context   就是使用这个   传入context

//不推荐使用

let obj = {name:'wad',age:88}
function foo() {
    function bar() {
        let age = 121
        with (obj) {
            console.log(age);
        }
    }
    bar()
}

foo()