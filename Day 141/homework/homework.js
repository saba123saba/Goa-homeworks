import React, { useState } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <button onClick={changeColor}>
        Change Background Color to {backgroundColor}
      </button>
    </div>
  );
};

export default ColorChanger;
