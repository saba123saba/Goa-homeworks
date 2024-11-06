for (let i = 0; i < 5; i++) {
    console.log('saba-kublashvili!')
}



// 1. შექმენით ფუნქცია რომელსაც დაარქმევთ even_sum, ამ ფუნქციას ექნება ერთი პარამეტრი სახელად
// border (ზღვარი), ფუნქცია 0- დან მაგ რიცხვის ჩათვლისთ უნდა გაიგოს ყველა ლუწი old რიცხვი if ის 
// დახმარებით და ყველა ლუწი რიცხვი უნდა შევკრიბოთ, მიღებული ჯამი კი დააბრუნეთ ფუნქციიდან

function evenSum(border) {
    let result = 0;

    for(let i = 0; i < border; i++) {
        if (i % 2 == 0) {
            result += i;
        } 
    }

    return result
}

console.log(evenSum(5));


// 2. შექმენით for ციკლი სადაც 20 - დან 0 ის ჩათვლით რიცხვებს დაბეჭდავთ

for (let i = 20; i >= 0; i--) {
    console.log(i)
}

// 3. შექმენით for ციკლი რომელიც 0 დან 10 ის ჩათვლით ყველა ლუწ რიცხვს დაბეჭდავს if ის გამოყენების გარეშე

for (let i = 0; i < 10; i += 2) {
    console.log(i)
}


// 4. შექმენით ფუნქცია, რომელსაც დაარმქევთ janarate_even, ამ ფუნქციას უნდა გადაეცეს Border და ზღვარი, თქვენი დავალებაა
// შექმნათ ახალი მასივი შემდეგ ახალ მასივში დაამატოთ 0 -დან border რიცხვის ჩათვლით ყველა ლუწი რიცხვი 
// და დააბრუნოთ მასივი ხოლო დაბრუნებული მასივი უნდა გადასცეთ შემდეგ ფუნქციას, მეორე ფუნქციის სახელია
//calculateSum რომელსაც გადაეცემა არგუმენტად მასივი. თქვენი დავალებაა for ციკლის დახმარებით დაბეჭდოთ
// ყველა რიცხვი ჯამი და დავაბრუნოთ


function generateEven(border) {
    let result = [];

    for (let i = 0; i <= border; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }

    return result;
}

// ფუნქცია რიცხვების ჯამისთვის
function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// გენერირეთ ლუწი რიცხვების მასივი
let evenNumbers = generateEven(20);

// დაბეჭდეთ ლუწი რიცხვები და ჯამი
console.log('Even numbers:', evenNumbers);
console.log('Sum of even numbers:', calculateSum(evenNumbers));



