import React, { useState } from "react";

function Arrow({ color, sortBy, setSortBy = (elem) => console.log(elem) }) {
  const [direction, setDirection] = useState("down");

  const toggle = () => {
    if (direction === "down") {
      setDirection("up");
    } else if (direction === "up") {
      setDirection("down");
    }
  };

  const sortTable = (s) => {
    if (direction === "down") {
      setSortBy(`${s}DESC`);
    } else if (direction === "up") {
      setSortBy(`${s}ASC`);
    }
  };

  return (
    <span
      className="arrowContainer"
      onClick={() => {
        toggle();
        sortTable(sortBy);
      }}
    >
      <i
        className={color || direction ? `arrow ${color} ${direction}` : "arrow"}
      ></i>
    </span>
  );
}

export default Arrow;
