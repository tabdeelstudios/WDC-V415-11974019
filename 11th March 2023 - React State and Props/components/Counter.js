import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let increaseCount = () => {
    setCount(count + 1);
  };

  let decreaseCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
