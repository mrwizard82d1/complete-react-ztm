// ES6 introduced the `Promise` type which takes **two** callback functions
// - The `resolve` callback invoked if `Promise` is "resolved"; that is, completes without error
// -- The `reject` callback is invoked if `Promise~ is **not** resoolved.
const myPromise = new Promise((resolve, reject) => {
    // A `Promise` is so named because it will **eventually** have a value

    // Simulates an asynchronous call.
    setTimeout(() => {
        resolve('I have succeeded')
    }, 1000 /* 1000 ms */ );
});

myPromise.then(value => console.log(value));

export { myPromise };
