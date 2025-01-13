// Project 1 გამოიყენეთ vite რომ დააყენოთ ახალი პროექტი, თვქენი დავალებაა შექმნათ  App კომპონენტში 2 ელემენტი, 
// პარაგრაფი და ღილაკი, ჭილაკზე დაკლიკებისას უნდა იმატებდეს მნიშვნელობა ერთით და განახლებული მნიშვნელობის 
// გამოტანა უნდა მოხდეს ეკრანზე (მდგომარეობა)

import { useState } from 'react';
// import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <main>
      <p>{count}</p>
      <button onClick={handleClick}>Click me (+)</button>
      <button onClick={handleClick2}>Click me (-)</button>
    </main>
  );
}
