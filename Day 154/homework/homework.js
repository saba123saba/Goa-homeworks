import React, { useState } from 'react';

function Login({ setIsAuthenticated, setAdmin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    const storedAdmin = localStorage.getItem('admin');
    if (storedAdmin) {
      const adminData = JSON.parse(storedAdmin);
      if (adminData.username === username && adminData.password === password) {
        setIsAuthenticated(true);
        setAdmin(adminData);
      } else {
        alert('Incorrect username or password');
      }
    }
  };

  const handleRegister = () => {
    const adminData = { username, password };
    localStorage.setItem('admin', JSON.stringify(adminData));
    setIsAuthenticated(true);
    setAdmin(adminData);
  };

  return (
    <div>
      <h2>{isRegistering ? 'რეგისტრაცია' : 'ავტორიზაცია'}</h2>
      <input type="text" placeholder="Use username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      {isRegistering ? (
        <button onClick={handleRegister}>Registration</button>
      ) : (
        <button onClick={handleLogin}>Authorization</button>
      )}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Copy' : 'Create New Registration'}
      </button>
    </div>
  );
}

export default Login;
