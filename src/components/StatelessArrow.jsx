import React from "react";

function Arrow({ color, direction, align }) {

  return (
    <span
      className="statelessArrowContainer"
    >
      <i
        className={color || direction ? `arrow ${color} ${direction}` : "arrow"}
      ></i>
    </span>
  );
}

export default Arrow;
