// import { useState } from "react";

// const Registration = () => {
//   const [logged, setLogged] = useState(false);
  
//   const RegistHandleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted!');

//     const accounts = [];
    
//     const name = e.target.name.value;
//     const lastname = e.target.lastname.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     for(const acc in accounts) {
//       if(acc.email === email && acc.password === password) {
//         return('Account already exist!');
//       }
//     }
  
//     const account = {
//       name: name,
//       lastname: lastname,
//       email: email,
//       password: password
//     }

//     accounts.push(account);
//     console.log(accounts);
//   }

//   const LogHandleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted!');

//     for(const acc in accounts) {
//       if(acc.email === email && acc.password === password) {
//         setLogged(true);
//       } else {
//         setLogged(false)
//       }
//     }
//   }
  
//   return (
//     <div>
//       <section>
//         <h1>Registration</h1>
//         <form onSubmit={RegistHandleSubmit}>
//           <label>Enter Name: </label><br />
//             <input type="text" name="name" placeholder="Please enter name" /><br /><br></br>

//             <label>Enter Lastname: </label><br />
//             <input type="text" name="lastname" placeholder="Please enter lastname" /><br /><br></br>

//             <label>Enter Email: </label><br />
//             <input type="email" name="email" placeholder="Please enter email" /><br /><br></br>

//             <label>Enter Password: </label><br />
//             <input type="password" name="password" placeholder="Please enter password" required /><br />
//           <br></br>
//           <button type="submit">Submit</button>
//         </form>
//       </section>

//       <section>
//         <h1>Log in</h1>
//         <form onSubmit={LogHandleSubmit}>
//             <label>Enter Email: </label><br />
//             <input type="email" name="email" placeholder="Please enter email" /><br /><br></br>

//             <label>Enter Password: </label><br />
//             <input type="password" name="password" placeholder="Please enter password" required /><br />
//           <br></br>
          
//           <button type="submit">Submit</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default Registration;