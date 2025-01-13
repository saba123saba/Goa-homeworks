// 1) შექმენით ფორმა სადაც გექნებათ 4 ინფუთ ელემენტი, თქვენი დავალებაა რომ შექმნათ ერთი მდგომარეობა,
// რომსელაც გამოიყენებთ 4 ინფუთისთვის + როგორც კი მდგომარეობა შეიცვლება ეგრევე უნდა გამოიტანოთ
// ამჟამინდელი მნიშვნელობები პარაგრაფებში მაგალითად email: value, pass, firstname და lastname

import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <form>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name"/>
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name"/>
      </form>

      <div>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>First Name: {formData.firstname}</p>
        <p>Last Name: {formData.lastname}</p>
      </div>
    </div>
  );
}

export default Form;
