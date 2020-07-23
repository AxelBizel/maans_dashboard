import React, { useState } from "react";

function SelectButton({ text, right, center, isSelected }) {
  const [selected, setSelected] = useState(isSelected);

  return (
    <div
      className={
        right
          ? "buttonWrapper right"
          : center
          ? "buttonWrapper center"
          : "buttonWrapper"
      }
    >
      {selected ? (
        <button
          className="selectedButton"
          onClick={() => setSelected(!selected)}
        >
          {text}
        </button>
      ) : (
        <button className="unselectedButton" onClick={() => setSelected(!selected)}>{text}</button>
      )}
    </div>
  );
}

export default SelectButton;
