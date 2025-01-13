// შექმენი პროექტი სადაც მომხმარებელს შეეძლება დაამატოს ახალი ელემენტი და წაშალოს
// დაკლიკებით დამატებული ელემენტი, გამოიყენეთ vite რომ დააყენოთ React

import { useState } from 'react';
// import './App.css';

export default function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target.item.value;
    setItems([...items, item])
    e.target.item.value = '';
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
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
              <li key={index} onClick={() => handleDelete(index)}>{item}</li>
            )
          })
        }
      </ul>
    </main>
  );
}
