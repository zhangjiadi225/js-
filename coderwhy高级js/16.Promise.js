//Promise.all([a,b])   接收一个数组  然后等数组中全都执行完  返回res   res为数组 也可以使用.catch捕获错误
//Promise.race([a,b])  接收最快的一个  
//Promise.any([a,b])   接收直到一个成功的结果   如果都失败  则等到全部失败
class MyPromise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        const resolve = value => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        };
        const reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
            }
        };

        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(res, rej) {
        if(this.status === 'fulfilled') {
            res(this.value);
        }
        if(this.status === 'rejected') {
            rej(this.reason);
        }
    }
}

const race = function(lists) {
    return new Promise((resolve, reject) => {
        lists.forEach(p => {
            Promise.resolve(p).then(val => {
                resolve(val)
            }, err => {
                reject(err)
            })
        })
    })
}




const p = new MyPromise((resolve, reject) => {
    // resolve('resolve')
    reject('rejected');
});

p.then(value => {
    console.log(value);
    console.log(1);
}, reason => {
    console.log(reason);
    console.log(2);
})

