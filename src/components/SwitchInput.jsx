import React, { useState, useEffect } from "react";

function SwitchInput({ active, right, center }) {
  const [isActive, setIsActive] = useState(active);
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div
      className={
        right
          ? "switchInput right"
          : center
          ? "switchInput center"
          : "switchInput"
      }
    >
      <label className="switch">
        <input type="checkbox" checked={isActive} readOnly />
        <span className="slider round" onClick={() => setIsActive(!isActive)}>
          <span className="sliderLabel"> {isActive ? "On" : "Off"} </span>
        </span>
      </label>
    </div>
  );
}

export default SwitchInput;
