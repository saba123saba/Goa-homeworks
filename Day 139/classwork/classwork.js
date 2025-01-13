const Authentication = () => {
  
    const handleSubmit = (e) => {
      e.preventDefaul();
      
      const account = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }
  
      console.log(account)
    }
    
    return (
      <div>
        <h1>Registration</h1>
        <p>
          This is the Authentication component. It will handle user authentication
          and authorization.
        </p>
        
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username"         required />
          <input type="email" name="email" placeholder="Email"              required />
          <input type="password" name="password"                placeholder="Password" minLength={6} maxLength={12} required />
  
          <button>Registration</button>
        </form>
      </div>
    );
  }
  
  export default Authentication;