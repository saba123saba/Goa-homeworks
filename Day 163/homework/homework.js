import { useState } from "react";

const Component2 = () => {
  const [inputedInfo, setInputedInfo] = useState(() => {
    const savedInfo = localStorage.getItem("userInfo");
    return savedInfo ? JSON.parse(savedInfo) : null;
  });
  
  const styleDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');

    const info = {
      fullname: e.target.fullname.value,
      email: e.target.email.value,
      password: e.target.Pass.value,
    }

    setInputedInfo(info);
    localStorage.getItem("userInfo", JSON.stringify(info));
  }
  
  return (
    <main>
      <div style={{ ...styleDiv }}>
        <h1>Sign up</h1>
        <form style={{ ...styleDiv }} onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="fullname" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="Pass" placeholder="Password" />

          <button>Submit</button>

          <div>
            {inputedInfo ? (
              <div>
                <h2>Fullname: {inputedInfo.fullname}</h2>
                <h2>Email: {inputedInfo.email}</h2>
                <h2>Password: {inputedInfo.password}</h2>
              </div>
            ) : (
              <h2>Please enter info!</h2>
            )
            }
          </div>
        </form>
      </div>
    </main>
  )
}

export default Component2;