import React, { useState, useEffect } from "react";

const NumberCounter = ({ targetCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < targetCount) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 10); // Adjust the interval as needed for the desired speed

    return () => clearInterval(interval);
  }, [count, targetCount]);

  return count;
};

export default NumberCounter;
