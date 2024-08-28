// 1. შექმენით ობიექტი და შეინახეთ ცვლადში, ობიექტშ დაგვჭირდება ასეთ კუთვნილებები სახელი გვარი ასაკი საცხოვრებელი ადგილი და აკადებია
// სადაც ვსწავლობთ

MyObject = {
    name: 'saba',
    lastname: 'kublashvili',
    age: 15,
    adress: 'Tbilisi',
    Academy: 'GOA'
}

const MyInformation = MyObject;
console.log(MyInformation)



// 2. გამოვიყენოთ DOM 

// html ში შექმენით ორი პარაგრაფი თითოელუს მიეცით განსხვავებული აიდი შემდეგ js ში ეს ორი პარაგრაფი წამოიღეთ DOM ის გამოყენებით და 
// შეინახეთ ცვლადში, შემდეგ ორივეს შეუცვალეთ text content

let p1 = document.getElementById('p1')

p1.style.color = 'green'
p1.style.fontSize = '40px'
p1.style.textAlign = 'center'


let p2 = document.getElementById('p2')

p2.style.color = 'blue'
p2.style.fontSize = '60px'
p2.style.textAlign = 'center'
p2.style.background = 'red'
p2.style.border = '2px solid black'
p2.style.borderRadius = '20px'


const divParent = document.getElementById('div-parent')

divParent.style.display = 'flex'
divParent.style.justifyContent = 'center'


const divP = document.getElementById('divP')

divP.style.display = 'flex'


const div = document.getElementById('div')


div.style.width = '300px'
div.style.height = '400px'
div.style.background = 'green'
div.style.border = '4px solid red'
div.style.borderRadius = '15px'


// Js function write

function IpAdress(city, country) {
    console.log(city + ' ' + country)
}

let MyFunction = IpAdress

MyFunction('tbilisi', 'Georgia')


// js two function


function calculator(a, b) {
    return a * b
}

const First = calculator
console.log(First(10, 20))

function greet() {
    console.log('Hello')
}



const div4 = document.getElementById('div4')

div4.style.display = 'flex'
div4.style.justifyContent = 'center'
div4.style.paddingTop = '60px'

let button1 = document.getElementById('button1')


button1.style.background = 'red'
button1.style.border = '2px solid green'
button1.style.borderRadius = '20px'





// html ში შექმენით ერთი პარაგრაფი და მიანიჭეთ აიდი შექმენით ღილაკი რომელსაც გადასცემთ onclick და გამოიძახებს ფუნქციას
// ფუნქციაში უნდა ეწეროს პარაგრაფის აიდი და მისი tect contect ი გახდება hello

function greet() {
    let MyFuntcion = document.getElementById('paragrafi7')

    MyFuntcion.style.color = 'red'
    MyFuntcion.textContent = 'Hello saba'
    MyFuntcion.style.border = '2px solid black'
    MyFunction.style.background = 'green'
}






function changdeColor() {
    let changdeCOlorvariable = document.getElementById('p3')

    changdeCOlorvariable.style.color = 'yellow'
}

function changdeColor2() {
    let changdeCOlorvariable2 = document.getElementById('p3')

    changdeCOlorvariable2.style.color = 'green'
}

function changdeColor3() {
    let changdeCOlorvariable3 = document.getElementById('p3')

    changdeCOlorvariable3.style.color = 'blue'
}

function changdeColor4() {
    let changdeCOlorvariable4 = document.getElementById('p3')

    changdeCOlorvariable4.style.color = 'red'
    changdeCOlorvariable4.body.style.backgroundColor = 'black'
}