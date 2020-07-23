import React from "react";
import SwitchInput from "./SwitchInput";

function ContentItem({ name, type, universe, duration, likes, active }) {
  return (
    <div className="contentItem">
      <h4 className="name">{name}</h4>
      <h4 className="type">{type}</h4>
      <h4 className="universe">{universe}</h4>
      <h4 className="duration">{duration}</h4>
      <h4 className="likes">{likes}</h4>
      <SwitchInput active={active} right />
    </div>
  );
}

export default ContentItem;
