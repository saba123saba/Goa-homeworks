//1. set() მეთოდის გამოყენება: შექმენი ცარიელი Map და დაამატე მასში რამდენიმე პროდუქტი და მათი ფასები set() მეთოდის გამოყენებით. შემდეგ თითოეული პროდუქტის დამატებისას კონსოლში დაბეჭდე შეტყობინება, რომ პროდუქტი წარმატებით დაემატა.


// const productPrices = new Map();

// function addProduct(name, price) {
//     productPrices.set(name, price);
//     console.log(`${name} - product add successfuly! Price - ${price}`)
// }

// console.log(addProduct('glasses', 20))


//2. get() მეთოდის გამოყენება: უკვე შექმნილი Map-დან, გამოიყენე get() მეთოდი, რათა გარკვეული პროდუქტის ფასი მიიღო და დაბეჭდო კონსოლში.

const productPrices = new Map();

function addProduct(name, price) {
    productPrices.set(name, price);
    console.log(`${name} - product add successfuly! Price - ${price}`)
}

function productName(name, price) {
    const priCe = addProduct.get(name);
    if(priCe !== undefined) {
        console.log(`Product name is ${name} and product Price is ${price}`)
    } else {
        console.log(`product - ${name} is not founded`);
    }
}

addProduct('glasses', 15);