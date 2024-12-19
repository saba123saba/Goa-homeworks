import './App.css';
import { useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
    };

    setProducts([...products, product]);

    e.target.name.value = '';
    e.target.price.value = '';
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter product name"
          name="name"
          required
        />
        <input
          type="number"
          placeholder="Please enter product price"
          name="price"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
