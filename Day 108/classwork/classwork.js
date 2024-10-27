// settled - დამყარებული, გადაწყვეტილი
// pending - მომლოდინე
// consumers - გამომყენებელი


// 1. ამ მისამართზე გააგზავნეთ მოთხოვნა  fetch ფუნქციის დახმარებით, ახსენით რას აკეთებს ეს ფუნქცია, შემდეგ დაბეჭდეთ პირდაპირ დაბრუნებული დაპირება კონსოლში, ახსენით რა არის დაპირება რეალური ცხვორების მაგალითიდ, როცა დაპირება დამყარდება გამოიყენეთ then და  catch ფუნქციები და ახსენით მათი დანიშნულება, აგრეთვე ახსენით რა არის  json და რატომ არის json მეთოდი ასინქრონიზირებული


const promise = fetch('https://jsonplaceholder.typicode.com/todos');

promise
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error))