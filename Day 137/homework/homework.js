import './App.css';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [submiting, setSubmiting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmiting(true);
  }

  const deleteInformation = () => {
    setName('');
    setLastname('');
    setSubmiting(false);
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>Please enter name:</label> <br />
        <input type='name' name='name' value={name} onChange={(e) => setName(e.target.value)} required/> <br /> <br />
        <label>Please enter lastname:</label> <br />
        <input type='lastname' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
        <br /> <br />
        <button type='submit'>Submit</button>
      </form>

      {submiting && (
        <div>
          <h3>Entered Information:</h3>
          <p>Name: {name}</p>
          <p>Lastname: {lastname}</p>
          <button onClick={deleteInformation}>delete</button>
        </div> 
      )}
      
    </main>
  );
}
