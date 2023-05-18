import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const decrementByTen = () => {
    setCount(count - 10);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByTen}>Increment 10</button>
      <button onClick={decrementByTen}>Decrement 10</button>
    </div>
  );
};

export default App;
