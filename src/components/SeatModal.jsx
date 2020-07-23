import React, { useState } from "react";
import Button from "./Button";
import SwitchInput from "./SwitchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";

function SeatModal({
  name,
  num,
  location,
  colors,
  installationDate,
  img,
  display,
}) {
  const [modal, setModal] = useState(false);

  console.log(modal);

  return (
    <div className="seatModal">
      {display === "list" ? (
        <FontAwesomeIcon
          icon={faSlidersH}
          className="editIcon"
          onClick={() => setModal(!modal)}
        />
      ) : (
        <Button action={() => setModal(!modal)} text="Paramètres" center />
      )}

      {modal ? (
        <div>
          <div className="modal_bg">
            <div className="modal">
              <div
                className="seatImg"
                style={{ backgroundImage: "url(" + img + ")" }}
              ></div>
              <div>
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
                  <li>
                    <span className="category">Nom du Wifi : </span>
                    {name}
                    <SwitchInput center />
                  </li>
                  <li>
                    <span className="category">Nom du Bluetooth : </span>
                    {name}
                    <SwitchInput center />
                  </li>
                  <li>
                    <span className="category">Volume maximum </span>
                    <div>
                      <input
                        type="range"
                        id="volume"
                        name="volume"
                        min="0"
                        max="11"
                      />
                    </div>
                  </li>
                </ul>
                <div className="seatButtons">
                  <Button action={() => setModal(!modal)} text="Valider" />
                  <Button action={() => setModal(!modal)} text="Annuler" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default SeatModal;
