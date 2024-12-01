// console.log('saba')

// შექმენით ორი ფაილი პირველში შექმენით ორი ფუნქცია - calculate average და greet, თქვენი მოვალეობაა 
// ეს ფუნქციები გადაიტანოთ index.js ში common.js ის დახმარებით.


const calculateAverage = (arr) => {
    sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    } return sum / arr.length
}

const greet = (name) => {
    console.log(`Hello, ${name}!`)
}

const firstname = 'saba';

module.exports = {calculateAverage, greet, firstname};
