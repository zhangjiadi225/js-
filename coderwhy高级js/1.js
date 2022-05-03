let arr = [1, 2, 2, 3, 3, 3,  4, 4, 4, 5, ]
var groupValue = function (maxCnt, input) {
    let resultArr = []
    let res = []
    for (let i = input.length; i >= 0; i--){
        while (input[i] !== input[i - 1]) {
            resultArr.push([input[i]])
            i--
        }
        while (res.length < maxCnt && input[i] === input[i-1]) {
            res.push(input[i])
            i--
        }
        resultArr.push(res)
        res = []
    }
    return resultArr
};

groupValue(3, arr)
console.log(groupValue(3,arr));

