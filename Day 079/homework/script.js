// 1. HOMEWORK

const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

function sendPassword() {
    const passwordValue = form.elements.password.value;

    if (passwordValue.length == 8 || passwordValue.length > 8) {
        alert('Password successfuly send!')
        console.log('Pass:', passwordValue)
        return;
    } else {
        alert('The password is short! Must be 8 characters')
    }
     
    console.log(passwordValue);
}

btn.addEventListener('click', sendPassword);
