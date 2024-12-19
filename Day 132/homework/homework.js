import './App.css'
import Myfile from './components/Myfile'
import {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const unincrement = () => {
    if(count === 0) {
      return;
    } else {
      setCount(count - 1)
    }
  }
  
  return (
    <main>
      <Myfile />
      <br /><br /><br />
      <button onClick={increment}>increment</button>
      <button onClick={unincrement}>unincrement</button>
      <p>{count}</p>
    </main>
  )
}

