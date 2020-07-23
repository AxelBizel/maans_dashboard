import React from "react";

function Button({ text, action, right, center, submit }) {
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
      {submit ? (
        <button className="standardButton" type="submit" onClick={action}>
          {text}
        </button>
      ) : (
        <button className="standardButton" onClick={action}>
          {text}
        </button>
      )}
    </div>
  );
}

export default Button;
