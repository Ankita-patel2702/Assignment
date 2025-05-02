import React, { useState } from 'react';

function Stateuse() {
  // Declare a state variable "count" and the setter function "setCount"
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Stateuse;
