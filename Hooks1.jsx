// Hook
// Task 1:
// Create a functional component with a counter using the useState() hook. Include
// buttons to increment and decrement the counter.

import React, { useState } from 'react';

const Hooks1 = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  const dec = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default Hooks1;
