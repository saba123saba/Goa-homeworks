// 2) შექმენით პროექტი სახელად todolist

import { useState } from 'react';
// import './App.css';

export default function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    setItems([...items, item])
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type='text' name='item' placeholder='Please enter text' required/>
        <button>Submit</button>
      </form>

      <ul>
        {
          items.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })
        }
      </ul>
    </main>
  );
}
