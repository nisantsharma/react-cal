import React, { useState } from 'react';
import './cal.css'
const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateInputs = () => {
    if (!num1 || !num2) {
      setError('Both fields are required');
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError('Please enter valid numbers');
      return false;
    }
    setError('');
    return true;
  };

  const handleAddition = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) + parseFloat(num2));
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) - parseFloat(num2));
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) * parseFloat(num2));
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div>
      <h2> React Calculator</h2>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p style={{ color: 'green' }}>Result: {result}</p>}
    </div>
  );
};

export default Calculator;
