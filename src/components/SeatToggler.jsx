import React, { useState } from "react";
import { seats } from "../assets/data/seats";
import StatelessArrow from "./StatelessArrow";

const SeatToggler = () => {
  const [open, setOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState("Tous les fauteuils");

  return (
    <div className="seatToggler">
      <div className="buttonDropDown" onClick={() => setOpen(!open)}>
        <h4>{selectedSeat}</h4>
        <span className="arrowContainer">

        <StatelessArrow color="white" direction={open ? "up" : "down"} />
        </span>
      </div>
      <div className={open ? "seatListOn" : "seatListOff"}>
        <ul>
          <li
            onClick={() => {
              setSelectedSeat("Tous les fauteuils");
              setOpen(!open);
            }}
          >
            Tous les fauteuils
          </li>
          {seats.map((s, i) => (
            <li
              key={`seat-${i}`}
              onClick={() => {
                setSelectedSeat(s.name);
                setOpen(!open);
              }}
            >
              {s.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatToggler;
