//!冒泡
function betterBubbleSort(arr) {
    const len = arr.length  
    for(let i=0;i<len;i++) {
        // 注意差别在这行，我们对内层循环的范围作了限制
        for(let j=0;j<len-1-i;j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}