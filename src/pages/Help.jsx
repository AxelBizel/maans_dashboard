import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import FAQItem from "../components/FAQItem";
import faqItems from "../assets/data/faqItems";


function Help() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div id="Help">
      <HeaderBar title="Foire aux questions" />
      <div className="mainContainer">
        <div className="FAQSection">
          {faqItems.map((item, index) => {
            return (
              <FAQItem
                key={`FAQItem-${index}`}
                question={item.question}
                answer={item.answer}
                setSelectedIndex={setSelectedIndex}
                index={index}
                selected={index === selectedIndex ? true : false}
                last={index === faqItems.length-1 ? true : false }
              />
            );
          })}
        </div>
        <div className="answerSection">
          <p>{faqItems[selectedIndex].answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Help;
