// function promptShow() {
//     let btn = document.getElementById('btn')
//     btn.addEventListener('click', prompt('Please enter your number!'))
// }


// const num = 50;
// console.log(typeof num);


// // 1. შექმენით Form ი სადაც გექნებათ სახელი გვარი და იმეილი. როდესაც დადასტურდება
// // ფორმა წამოიღეთ მონაცემები და დაამატეთ ობიექტში, ხოლო ახალ შექმნილი ობიექტი დაამატეთ მასივში
// // ყოველ ახალ დამატებულ ობიექტზე დაბეჭდეთ მასივი.

// let result = []; // მასივი სადაც შევინახავთ ობიექტებს

// const form = document.getElementById('myForm'); // ფორმის ელემენტი
 
// const userList = document.getElementById('userList'); // სიის ელემენტი სადაც დავამატებთ ობიექტის სიას

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstname = document.getElementById('firstname').value;
//     const lastname = document.getElementById('lastname').value;
//     const email = document.getElementById('email').value;

//     const newUser = {
//         firstName: firstname,
//         lastName: lastname,
//         email: email
//     };

//     // ახალი ობიექტის დამატება მასივში
//     result.push(newUser);

//     console.log(result);

//     // სიის წარწერის განახლენა
//     updateUserList();
// });


function updateUserList() {
    userList.innerHTML = ''; // ძველი სიის გასუფთავება

    result.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
        userList.appendChild(listItem);
    });
}

const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

const dataBase = []

function valedeform() {
    const nameValue = form.elements.name.value;
    const lastNameValue = form.elements.lastname.value;
    const emailValue = form.elements.email.value;

    if (nameValue == '' || lastNameValue == '' || emailValue == '') {
        alert('Please enter a information!');
        return;
    }

    const acc = {
        Name: nameValue,
        Lastname: lastNameValue,
        Email: emailValue 
    }

    dataBase.push(acc);
    alert('information push successufuly!')

    console.log(dataBase)
}


btn.onclick = valedeform;
