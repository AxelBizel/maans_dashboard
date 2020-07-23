import React from "react";
import SeatModal from "./SeatModal";

function SeatCard({ name, num, colors, location, installationDate, img }) {
  return (
    <div className="seatCard">
      <div className="seatCard__infos">
        <div
          className="seatCard__img"
          style={{ backgroundImage: "url(" + img + ")" }}
        ></div>
        <div className="seatCard__details">
          <ul>
            <li>
              <span className="category">Nom du fauteuil : </span> {name}
            </li>
            <li>
              <span className="category">Numéro de série : </span> {num}
            </li>
            <li>
              <span className="category">Couleurs : </span> {colors}
            </li>
            <li>
              <span className="category">Lieu d'installation : </span>
              {location}
            </li>
            <li>
              <span className="category">Date d'installation : </span>
              {installationDate}
            </li>
          </ul>
          <div className="seatButtons">
            <SeatModal
              name={name}
              num={num}
              colors={colors}
              location={location}
              installationDate={installationDate}
              img={img}
              display="card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatCard;
