import { useState } from "react";
import { Button } from "@mui/material";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };

  const decreaseCount = () => {
    setCount(function (currCount) {
      return currCount - 1;
    });
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Number of votes: {count}</p>
      <Button style={{ color: "green" }} onClick={increaseCount}>
        increase 👍
      </Button>
      <Button style={{ color: "red" }} onClick={decreaseCount}>
        decrease 👎
      </Button>
      <Button onClick={resetCounter}>reset</Button>
    </div>
  );
};

export default Counter;
