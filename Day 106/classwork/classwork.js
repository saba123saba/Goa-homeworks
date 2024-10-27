// handler - მმართველი 

setTimeout(() => {
    console.log('saba')
}, 2000)

console.log('saba');
console.log('saba');


// ხშირ შემთხვევაში მოვლენებს მოჰყვება 'რეაქციები'

// event handler - ' მოვლენის მმართველი '

const numbers = [1, 2, 3, 4, 6, 7];

numbers.forEach(function(number, index){
    console.log(number, index)
})


// forEach ი გამოიყენება მასივებზე სამუშაოთ




function greeting(name) {           // callback ი არის ფუნქცია რომელსაც გადავცემთ სხვა ფუნქციის მეშვეობით!
    console.log('hello', name) 
}

function processUserInput(callback) {
    const name = 'saba';
    callback(name);
}

processUserInput(greeting)



