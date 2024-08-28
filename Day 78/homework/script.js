// <!-- კომენტარების გამოყენებით ახსენით js-ში ფუნქციები რაში გამოიყენება და როგორ გამოგადგებათ -->


// მაგ: 

function ChangeColor() {
    let paragrafi = document.getElementById('paragrafi')

    paragrafi.style.color = 'green'
    paragrafi.style.background = 'black'
    paragrafi.style.border = '2px solid black'
}



// ზემოთ მოცემული ფუნქცია გამოყენებულიმაქვს პარაგრაფის ცვლილებების მოხდენისთის. ღილაკზე დაჭერით იცვლება პარაგრაფის
// background და text ის ფერი ასევე გარშემო ავლებს borders. ეს ყველაფერი საიტს ხდის ლამაზს. 






// 2.შექმენით პარაგრაფი, რომლის საწყისი ტექსტი იქნება 0. მის ქვემოთ შექმენით ერთი ღილაკი, რომლის ყოველ 
//დაკლიკებაზე counter ცვლადს ერთი მოემატება და ეს რიცხვი გახდება პარაგრაფის textcontent მეორე ღილაკზე დაჭერის შემთხვევაში დააკლდება 1

let counter = 0;    // counter ცვლადი გავიტანე ფუნქციის გარეთ რადგან მისი მნიშვნელობაქ ყოვერლ ჯერზე 1 ით გაიზარდოს

    // addition

function addition1() {
    let variable = document.getElementById('paragrafi2');

    counter++;
    variable.textContent = counter;
}


    // TheyExecutedHim

function TheyExecutedHim() {
    let variable = document.getElementById('paragrafi2');

    if (counter > 0) {
        counter--;
        variable.textContent = counter;
    }
}





// 2. შექმენით დივ ბლოკი, რომლის ზომა იქნება 400x400px. ცალკე შექმენით 5 ღილაკი - პირველს დაუწერეთ red, 
// მეორეს blue, მესამეს pink, მეოთხეს black, მეხუთეს კი green. ღილაკების ტექსტის შესაბამისად, მათ დაკლიკებაზე 
// უნდა იცვლებოდეს დივ ბლოკის backgroung ფერი. მაგალითად, თუ დააკლიკებთ ღილაკზე, რომელსაც უწერია green, 
// დივ ბლოკის ფერი უნდა გახდეს მწვანე

function ChangdeBackground() {
    let MyVariable = document.getElementById('div');

    MyVariable.style.background = 'red';
}

function ChangdeBackground2() {
    let MyVariable2 = document.getElementById('div');

    MyVariable2.style.background = 'blue';
}

function ChangdeBackground3() {
    let MyVariable3 = document.getElementById('div');

    MyVariable3.style.background = 'pink';
}

function ChangdeBackground4() {
    let MyVariable4 = document.getElementById('div');

    MyVariable4.style.background = 'black';
}

function ChangdeBackground5() {
    let MyVariable5 = document.getElementById('div');

    MyVariable5.style.background = 'green';
}