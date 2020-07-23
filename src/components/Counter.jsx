import React, { useState, useEffect } from "react";

function Counter({ number }) {
  const [counter, setCounter] = useState(false);
  const timer = 800;
  const delay = 20;
  const range = (number * delay) / timer;
  
  useEffect(() => {
    if (counter < number) {
      setTimeout(() => {
        setCounter(Math.ceil(counter + range));
      }, delay);
    }
    if (counter > number) {
      setCounter(number);
    }
  }, [counter, number, range]);

  return <h3>{counter} </h3>;
}

export default Counter;
