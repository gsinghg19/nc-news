import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Number of votes: {count}</p>
      <button onClick={increaseCount}>increase</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
};

export default Counter;
