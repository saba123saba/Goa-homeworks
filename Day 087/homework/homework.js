let myTime = 0;

const id = setInterval(function() {
    myTime++;
    console.log(myTime);
    
    if (myTime === 10) {
        clearInterval(id);
        console.log('Your time is up');
    }
}, 1000)


let myTime2 = 5;

const id2 = setInterval(function() {
    myTime2++;
    console.log(myTime2);
    
    if (myTime2 === 10) {
        clearInterval(id2);
        console.log('Your time is up');
    }
}, 1000)


const button = document.getElementById('button');
const pArray = document.getElementsByTagName('p');

function changdeColor() {
    pArray.style.border = '2px solid red';
}

button.addEventListener('click', changdeColor);

