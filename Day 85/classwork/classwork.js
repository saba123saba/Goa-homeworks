const names = new Array(5);
names[0] = 'saba';
names[1] = 'nika';

console.log(names);


const adress = ['GEORGIA','TBILISi','DIGOMI'];
const adressLenght = adress.length;
console.log(adressLenght);

                        // concat მეთოდით ჩვენ შეგვიძლია გავაერთიანოთ მასივები, და დავაბრუნოთ გაერთიანებული სახით

const c1 = ['hello'];
const c2 = ['saba'];

const c1C2 = c1.concat(c2);
console.log(c1C2);


                        // მასივში შევცვალე მნიშვნელობა ინდექსის გამოყენებით

const names = ['luka', 'nika', 'gio'];

names[1] = 'saba';
names[2] = 'goga';
console.log(names);

                            // აქ კი მასივში დავამატე push მეთოდით ელემენტი


const names = ['luka', 'nika', 'gio'];

names[1] = 'saba';
names[2] = 'goga';
console.log(names);


                            // გამოვიყენე pop მეთოდი რომელმაც წაშალა სიის ბოლო ელემენტი (pop)


const names = ['luka', 'nika', 'gio'];

names.pop();
console.log(names);



                            // shift მეთოდი აშორებს პირველ ელემენტს მასივიდან * არსებობს (unshift) იც


const names = ['luka', 'nika', 'gio'];

names.shift();
console.log(names);




                            // გვაქვს კიდევ slice მეთოდი რომელსაც გადაეცემა ორი მნიშვნელობა ინდექსის სახით და დაგვიბრუნებს მასთ მნიშვნელობებს
    

const names = ['luka', 'nika', 'gio'];

console.log(names.slice(0, 2));


                            // splice ჩამოაჭრის სიაში მითითებული ინდექსიდან ელემენეტბს



const names = ['luka', 'nika', 'gio'];

names.splice(0, 2);

console.log(names);


/////////////////////////////// functnion ის შენახვა ცვლადში (constanta- ში)


const sum = function(start, end) {
    return start * end;
}

console.log(sum(4, 5))