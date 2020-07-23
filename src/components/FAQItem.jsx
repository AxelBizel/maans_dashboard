import React from "react";
import StatelessArrow from "./StatelessArrow";

function FAQItem({ question, index, selected, setSelectedIndex, last }) {
  return (
    <div
      className={
        selected || last
          ? selected && last
            ? "selected last FAQItem"
            : selected
            ? "selected FAQItem"
            : "last FAQItem"
          : "FAQItem"
      }
    >
      <div className="questionHeader" onClick={() => setSelectedIndex(index)}>
        <h3 className="question">{question.toUpperCase()}</h3>
        <div className="arrowHelp">
          <StatelessArrow
            color={selected ? "white" : "anthracite"}
            direction={selected ? "right" : "down"}
          />
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
