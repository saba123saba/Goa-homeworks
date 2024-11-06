let result = [];

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// 1) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის
// ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი

function myFunction(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result
}

// 2) დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage ამ ფუნქციაში გამოითვლით
// იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშულა დააბრუნეთ ფუნქციიდან

function calculateAverage(start, end) {
    let numbers = myFunction(start, end);
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }

    let average = result / numbers.length;

    return average
}

console.log(calculateAverage(15, 20));