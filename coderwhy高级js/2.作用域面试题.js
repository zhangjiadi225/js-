function foo() {
    var a = b = 10
    // var a  = 10
    // b = 10   不加 var 直接进入全局
}
foo()
console.log(b);