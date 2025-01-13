import React, { useState } from 'react';

function InputForm() {
  const [inputs, setInputs] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <input type="text" name="input1" value={inputs.input1} onChange={handleChange}/>
      <input type="text" name="input2" value={inputs.input2} onChange={handleChange}/>
      <input type="text" name="input3" value={inputs.input3} onChange={handleChange}/>
      <input type="text" name="input4" value={inputs.input4} onChange={handleChange}/>
      <input type="text" name="input5" value={inputs.input5} onChange={handleChange}/>
    </div>
  );
}

export default InputForm;
