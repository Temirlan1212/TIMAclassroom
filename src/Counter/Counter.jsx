import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <center>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>decrement </button>
    </center>
  );
};

export default Counter;
