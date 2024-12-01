const profile = (
    <div>
      <h1>John Smith</h1>
      <img src="images/john.png" />
      <article>
        My name is John Smith.
        <br />
        I am a software developer.
        <br />
        I specialize in creating React applications.
      </article>
    </div>
);

// ზემოთ მოცემულ JSX ის კოდში ცარიელ თეგებთან ვიყენებთ დახრილ ხაზს (რადგან აუცილებელია, სხვაგვარად გვექნება Error!)

import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root.render(img);

// import './App.css'

// export default function App() {
//   const people = [
//     {name: 'saba', age: 15},
//     {name: 'luka', age: 16},
//     {name: 'mirko', age: 18},
//   ];

//   const peopleList = people.map((person, i) => (
//     <li key={'person_' + i}>
//       {person.name} - {person.age} years old
//     </li>
//   ));
  
  
//   return (
//     <main>
//       {peopleList}
//     </main>
//   )
// }