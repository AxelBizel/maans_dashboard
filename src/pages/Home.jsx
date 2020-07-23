import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import SeatCard from "../components/SeatCard";
import Arrow from "../components/Arrow";
import { useCookies } from "react-cookie";
import { seats } from "../assets/data/seats";
import SeatListItem from "../components/SeatListItem";

function Home() {
  const [cookies] = useCookies(["displayCookie"]);
  const [sortBy, setSortBy] = useState("NameASC");

  const sortHome = (s) => {
    switch (s) {
      case "NameASC":
        return function (a, b) {
          return a.name.localeCompare(b.name);
        };
      case "NameDESC":
        return function (a, b) {
          return b.name.localeCompare(a.name);
        };
      case "LocationASC":
        return function (a, b) {
          return a["location"].localeCompare(b["location"]);
        };
      case "LocationDESC":
        return function (a, b) {
          return b["location"].localeCompare(a["location"]);
        };
      case "ColorsASC":
        return function (a, b) {
          return a.colors.localeCompare(b.colors);
        };
      case "ColorsDESC":
        return function (a, b) {
          return b.colors.localeCompare(a.colors);
        };
      default:
        break;
    }
  };

  return (
    <div id="Home">
      <HeaderBar title="Accueil" displaySwitch />

      <div className="mainContainer">
        {cookies.displayCookie === "grid" ? (
          <div className="grid">
            {seats.map((c, i) => {
              return (
                <div className="seatCardWrapper" key={`card-${i}`}>
                  <SeatCard
                    name={c.name}
                    num={c.num}
                    colors={c.colors}
                    location={c.location}
                    installationDate={c.installationDate}
                    img={c.img}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          false
        )}

        {cookies.displayCookie === "list" ? (
          <div className="list">
            <div className="seatsHeader">
              <span className="category name">
                Nom du fauteuil
                <Arrow color="white" sortBy="Name" setSortBy={setSortBy} />
              </span>
              <span className="category location">
                Lieu d'installation
                <Arrow color="white" sortBy="Location" setSortBy={setSortBy} />
              </span>
              <span className="category colors">
                Couleurs
                <Arrow color="white" sortBy="Colors" setSortBy={setSortBy} />
              </span>

              <span className="category edit">Paramètres</span>
            </div>

            {seats.sort(sortHome(sortBy)).map((c, i) => {
              return (
                <SeatListItem
                  name={c.name}
                  num={c.num}
                  colors={c.colors}
                  location={c.location}
                  installationDate={c.installationDate}
                  img={c.img}
                  key={`seatModal-${i}`}
                />
              );
            })}
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Home;
