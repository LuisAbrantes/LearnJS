setTimeout(() => {
    console.log('First!!!');
}, 3000);

let returnPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 seconds');
            resolve();
        }, 2000);
    });
};

let doTimeOut = async () => {
    await returnPromise('First');
    await returnPromise('Second');
    await returnPromise('Third');
};

let promise = returnPromise();
console.log(promise);
