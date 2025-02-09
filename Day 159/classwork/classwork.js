// 1) შექმენით კალულატორის პროექტი, სადაც გექნბათ 2 ინფუთი და ღილაკი, თქვენი დავალებაა
// ამ ორი ინფუთიდან წამოიღოთ რიცხვები და როცა ღილაკზე მოხდება დაკლიკება გამოიანგარიშოთ
// მათი ჯამი. მთავარი იდეა: გამოიყენეთ ახლანს ნასწავლი ნიმუში (Container and Presentational splitting)
// რომ გაამარტივოთ კოდი (აგრეთვე გამოიყენეთ State lifiting)

                        // Container.jsx

// import Presentational from './Presentational';

// const Container = () => {
//   const handleSum = (e) => {
//     e.preventDefault();
//     const num1 = e.target.num1.value;
//     const num2 = e.target.num2.value;

//     const sum = Number(num1) + Number(num2);

//     const p = document.querySelector('sumP');
//     p.innerHTML = `Sum: ${sum}`
//   }

//   return (
//     <Presentational handleSum={handleSum}/>
//   );
// }

// export default Container;



                        // Presentational.jsx
                           
// const Presentatioal = (handleSum) => {
//   return (
//     <form onClick={handleSum}>
//       <input type="text" name="num1" id=""></input>
//       <input type="text" name="num2" id=""></input>
//       <div>
//         <button>Sum</button>
//         <p id="sumP">Sum: </p>
//       </div>
//     </form>
//   )
// }

// export default Presentatioal;


                        // Calculate.jsx

import Container from './Container';

const Calculator = () => {
  return (
    <Container />
  )
}

export default Calculator;