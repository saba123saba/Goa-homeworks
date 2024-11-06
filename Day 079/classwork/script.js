// 1. შექმენით web გვრედი სადაც მომხმარებელს promt ის დახმარებით ორჯერ შემოატანინებთ რიცხვს, ამ ორ 
// შემოტანილ რიცხვებს შორის გამოიყენეთ რაიმე ოპერაცია

function getNumber() {
    let userInput = prompt('Please enter number1 !:');

    let userInput2 = userInput = prompt('Please enter number2 !:');

    let number = parseFloat(userInput);
    let number2 = parseFloat(userInput2);

    if (!isNaN(number)) {
        // alert('Your entered the number: ${number}')
        // console.log('user Entered: ${number}')
        if (!isNaN(number) && !isNaN(number2)) {
            let sum = number + number2
            alert(sum);
        }
    } else {
        alert('Thats not a valid number. Please enter a Number!')
    }
}

// 2. შექმენით form ი : სრული სახელი, იმეილი, პაროლი და საყვარელი ფერი. შემდეგ js ის დახმარებით მოახდინეთ form ის ვალიდაცია,
// როდესაც ღილაკზე დაკლიკება მოხდება, თუ ყველა ფორმა შევსებულია გამოუტანეთ რომ ყველა ველი შევსებულია, თუ არარის გამოუტანეთ რომ
// ყველა ველი არარის შევსებული

const form = document.getElementById('myForm'); // შევქმენი ცვლადი სადაც წამოვიღე აიდის მეშვეობით form
const btn = document.getElementById('btn'); // შევქმენი ცვლადი სადაც წამოვიღე აიდის მეშვეობით btn 

function clickHandler() { // შევქმენი ფუნქცია სადაც უშუალოდ ვუწერ ალგორითმს თუ როგორ უნდა იმუშავოს და გაიგზავნოს ინფორმაციები console ში
    const fullName = form.elements.name.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const textvalue = form.elements.text.value;

    if (fullName == '' || emailValue == '' || passwordValue == '' || textvalue == '') {
        alert('Please full input !')
        return;
    } else {
        alert('All input FUll! Submit Successufuly')
    }

    console.log('FUllname:', fullName)
    console.log('Email:', emailValue);
    console.log('Pass:', passwordValue);
    console.log('Text:', textvalue)
}

btn.addEventListener('click', clickHandler); // როდესაც ღილაკზე daclick ება მოხდება მაშინ გაეშვას cliclHandler ფუნქცია