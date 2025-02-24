import React from "react";
import { useState } from "react";


export const Counter = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={counter}>UP</button>
    </div>
  );
};


