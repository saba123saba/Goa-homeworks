//////////////////////////// METHODS (Math) - ობიექტით ( საშუალებას გვაძლევს შევასრულოთ მათემატიკური ოპერაციები);

                    //// round ფუნქციას გადავცემთ ათწილად რიცხვს (Float - ს და დაგვიბრუნებს უახლოეს მთელ რიცხვს, ანუ დაგვიმრგვალებს)
console.log(Math.round(4.6))

let myVariables = Math.round(5.6);
console.log(myVariables);           // ამრგვალებს რიცხვს


                    //// floor მეთოდი დაამრგვალებს ყველაზე პატარა რიცხვამდე, მაგალითად თუდავწერე 5.6 გამომიტანს 6 ის მაგივრად 5 ს

console.log(Math.floor(5.7));

let myVariables2 = Math.floor(5.6); /// ამრგვალებს ყველაზე პატარა მთელ რიცხვამდე
console.log(myVariables2);


                    ////  trunc მეთოდი დაგვიბრუნებს რიცხვს მთელი რიცხვის სახით, რაც აქვს ათწილადი მას ჩამოაჭრის და დატოვებს მთე
                    // რიცხვს, არ მრგვალდება. უბრალოდ ჩამოჭრის ათწილადს;

console.log(Math.trunc(6.7)); /// the result = 6;



                    /// ceil - მეთოდი floor ის საპირისპიროა, ანუ დაამრგვალებს უახლოეს მთელ დიდ რიცხვამდე.

console.log(Math.ceil(6.7));


                    // sign - მეთოდი დააბრუნებს - თუ დადებითია რიცხვი '1' იანს, ხოლო თუ უარყოფითია '-1' იანს;
                    // null ან (0) ის შემთხვევაში - 0

console.log(Math.sign(5.6)); // აბრუნებს 1 იანს, რადგან დადებითია

                    // pow - მეთოდს აყავს რიცხვი ხარისხში, გადაეცემა ორი მნიშვნელობა: 1- ი რა რიცხვიც უნდა ავიყვანოთ, 2-  ე რომელ
                    // ხარისხში უნდა ავიყვანოთ. მაგ :

console.log(Math.pow(5, 2)); // the result = 25;

                    // sqrt - მეთოდს გადაეცემა რიცხვი, და ამ რიცხვიდან ამოიღებს კვადრატულ ფესვს;

console.log(Math.sqrt(25)); // the result = 5;



                    // ეს კოდი მიჩვენებს მიმდინარე თარიღსა და დროს, ზუსტაად
 
let currentDate = new Date();
console.log(currentDate);  // ჩვენ Date ობიექტს შეგვიძლია ჩვენთითონაც გავუწეროთ თარიღი;


            let currentDate2 = new Date();
            console.log(currentDate2.toString());    


/////////////////////////////////////////////////

const heading1DiV = document.getElementById('heading1DiV');

heading1DiV.style.display = 'flex';
heading1DiV.style.justifyContent = 'center';


const heaDing1 = document.getElementById('heading1');

heaDing1.style.background = 'red';
heaDing1.style.border = '2px solid black';
heaDing1.style.color = 'white';
heaDing1.style.alignItems = 'center';
heaDing1.style.borderRadius = '18px';


