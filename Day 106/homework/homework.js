// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".

const myPromise = new Promise((resolve, reject) => {
    resolve('hello, Promise')
});

myPromise
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.log(error);
    })
