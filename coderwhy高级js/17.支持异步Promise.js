//支持异步
class Promise {
    constructor(executor) {
        // 状态
        this.status = 'pending';
        // 成功的值
        this.value = undefined;
        // 失败的值
        this.reason = undefined;
        // 给数组是为了支持多个实例进行 then 的情况        
        this.onFulfilledCallbacks = [];  //保存成功回调
        this.onRejectedCallbacks = [];  //保存失败回调
        const resolve = value => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                // 只要外部调用了 resolve，就循环成功数组的函数
                this.onFulfilledCallbacks.forEach(cb => cb());
            }
        };
        const reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                // 只要外部调用了 reject，就循环失败数组的函数
                this.onRejectedCallbacks.forEach(cb => cb());
            }
        };
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if(this.status === 'fulfilled') {
            onFulfilled(this.value);
        }
        if(this.status === 'rejected') {
            onRejected(this.reason);
        }
        if(this.status === 'pending') {
            this.onFulfilledCallbacks.push(() => onFulfilled(this.value));
            this.onRejectedCallbacks.push(() => onRejected(this.reason));
        }
        
    }
}


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fulfilled');
        // reject('rejected');
    }, 1000);
});

p.then(value => {
    console.log(value);
},err => {
    console.log(err);
});