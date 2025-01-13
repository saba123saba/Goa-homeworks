// import React, { useState, useEffect } from 'react';
// import Login from './Login';
// import Dashboard from './Dashboard';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [admin, setAdmin] = useState(null);

//   useEffect(() => {
//     const storedAdmin = localStorage.getItem('admin');
//     if (storedAdmin) {
//       setIsAuthenticated(true);
//       setAdmin(JSON.parse(storedAdmin));
//     }
//   }, []);

//   return (
//     <div>
//       {isAuthenticated ? (
//         <Dashboard admin={admin} setIsAuthenticated={setIsAuthenticated} />
//       ) : (
//         <Login setIsAuthenticated={setIsAuthenticated} setAdmin={setAdmin} />
//       )}
//     </div>
//   );
// }

// export default App;


