import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (input) {
        setResult(eval(input));
        setError(null);
      } else {
        setResult(null);
      }
    } catch (err) {
      setError("Invalid Expression");
    }
  }, [input]);

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{error ? error : result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "/", "(", ")"].map((char) => (
          <button key={char} onClick={() => handleInput(char)}>
            {char}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput("=")}>=</button>
      </div>
    </div>
  );
}
