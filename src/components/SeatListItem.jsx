import React from "react";
import SeatModal from "./SeatModal";

function SeatListItem({
  name,
  num,
  location,
  colors,
  installationDate,
  img,
}) {
  return (
    <div className="seatList">
      <h4 className="name">{name}</h4>
      <h4 className="location">{location}</h4>
      <h4 className="colors">{colors}</h4>
      <SeatModal
        name={name}
        num={num}
        colors={colors}
        location={location}
        installationDate={installationDate}
        img={img}
        display="list"
      />
    </div>
  );
}

export default SeatListItem;
