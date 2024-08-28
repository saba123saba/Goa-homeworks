function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

const person1 = new Person('saba', 'kublashvili');
console.log(person1)

const person2 = new Person('nika', 'kublashvili');
console.log(person2)


// 1. შექმენით სარეგისტრაციო ფორმა, სადაც მომხმარებელი შემოიტანს სამ მნიშვნელობას: 1. სახელი, 2. გვარი, და 3.იმეილი 
// js ს დახმარებით ეს მნიშვნელობები დადასტურების თანავე უნდა წამოიღოთ და შექმნათ ობიექტი რომელსაც ჩაამატებთ dataBase მასივში
// ობიექტი უნდა შეიქმნას კონსტრუქტორის დახმარებით, კონსტრუქტორს დააარქვით account 
// შემდეგ კი კომენტარებით ახსენით რასაკეთებს new და რასაკეთბს this მეთოდი


function Account(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

const formContainer = document.getElementById('formContainer');
const btn = document.getElementById('btn');

let dataBase = [];

function valedeform() {
    const firstNameValue = formContainer.elements.firstName.value;
    const lastNameValue = formContainer.elements.lastName.value;
    const emailValue = formContainer.elements.email.value;

    if (firstNameValue == '' || lastNameValue === '' || emailValue === '') {
        alert('Please enter all form information!')
        return;
    } else {
        alert('form fulled successfuly');
    }

    let newAccount = new Account(firstNameValue, lastNameValue, emailValue)

    dataBase.push(newAccount);

    console.log(dataBase)

    formContainer.reset();
}

btn.addEventListener('click', valedeform);



//          this keyword

//  'this' ი არის js ში სპეციალური keyword, რომელიც მიუთითებს იმ ობიექტზე, სადაც გაწვდილია
// მისი მნიშვნელობა დამოკიდებულია იმაზე, თუ სად და როგორაა გაწვდილი


//function Account(firstName, lastName, email) {
    //this.firstName = firstName; // `this` მიუთითებს ახალ შექმნილ ობიექტზე
    //this.lastName = lastName;
    //this.email = email;
//}



//          new keyword

// 'new' ი არის js ში სპეციალური keyword, რომელიც გამოიყენება ახალი ობიექტების შესაქმნელად
// და აყალიბებს კონსტრუქტორების მიერ შექმნილ ობიექტებს

//function Account(firstName, lastName, email) {
    //this.firstName = firstName; // `this` მიუთითებს ახალ შექმნილ ობიექტზე
    //this.lastName = lastName;
    //this.email = email;
//}

//let myAccount = new Account('John', 'Doe', 'john.doe@example.com');
//console.log(myAccount); // Account { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' }



// ობიექტის ტიპი - მიმთითბელი ტიპი(მეორენაირად)