// import React from 'React';


// const add = (num1, num2) => num1 + num2;
// const mult = (num1, num2) => num1 + add(num1, num2);

// console.log(mult(2,5))

// 1) შექმენით კომპონენტი რომელიც არგუმენტად მიირებს სახელების სიას და თქვენ  ul tag ში უნდა დაარენდეროთ თითოეული მნიშვნელობისთვის
// ერთი li tag ი

const Names = ({names}) => { // ან props ით გავაკეთებდი
    return (
      <ul>
        {
          names.map((value, index) => {
            return (
              <li key={index}>{value}</li>
            );
          })
        }
      </ul>
    )
  }
 
export default Names;
