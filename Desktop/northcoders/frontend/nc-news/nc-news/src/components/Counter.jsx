import { useState } from "react";
import { Button } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };

  const decreaseCount = () => {
    setCount(function (currCount) {
      if (currCount > 0) {
        return currCount - 1;
      } else {
        return 0;
      }
    });
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Number of votes: {count}</p>
      <Button
        style={{ color: "green" }}
        variant="outlined"
        onClick={increaseCount}
      >
        increase 👍
      </Button>
      <Button
        style={{ color: "red" }}
        variant="outlined"
        onClick={decreaseCount}
      >
        decrease 👎
      </Button>
      <Button onClick={resetCounter} variant="outlined">
        reset
        <PriorityHighIcon />
      </Button>
    </div>
  );
};

export default Counter;
