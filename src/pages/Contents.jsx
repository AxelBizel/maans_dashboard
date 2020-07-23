import React, { useState } from "react";
import HeaderBar from "../components/HeaderBar";
import contents from "../assets/data/contents";
import ContentItem from "../components/ContentItem";
import Arrow from "../components/Arrow";

function Contents() {
  const [sortBy, setSortBy] = useState("NameASC");
  const [filter, setFilter] = useState("");

  const sortContents = (s) => {
    switch (s) {
      case "NameASC":
        return function (a, b) {
          return a.name.localeCompare(b.name);
        };
      case "NameDESC":
        return function (a, b) {
          return b.name.localeCompare(a.name);
        };
      case "TypeASC":
        return function (a, b) {
          return a.type.localeCompare(b.type);
        };
      case "TypeDESC":
        return function (a, b) {
          return b.type.localeCompare(a.type);
        };
      case "UniverseASC":
        return function (a, b) {
          return a.universe.localeCompare(b.universe);
        };
      case "UniverseDESC":
        return function (a, b) {
          return b.universe.localeCompare(a.universe);
        };
      case "DurationASC":
        return function (a, b) {
          return a.duration.localeCompare(b.duration);
        };
      case "DurationDESC":
        return function (a, b) {
          return b.duration.localeCompare(a.duration);
        };
      case "LikesASC":
        return function (a, b) {
          return a.likes - b.likes;
        };
      case "LikesDESC":
        return function (a, b) {
          return b.likes - a.likes;
        };
      case "ActiveASC":
        return function (a, b) {
          return a.active - b.active;
        };
      case "ActiveDESC":
        return function (a, b) {
          return b.active - a.active;
        };
      default:
        break;
    }
  };

  return (
    <div id="Contents">
      <HeaderBar title="Gestion des Contenus" seatToggler searchInput setFilter={setFilter} addButton/>
      <div className="mainContainer">
        <div className="contentsSection">
          <div className="contentsHeader">
            <span className="name">
              Nom
              <Arrow sortBy="Name" setSortBy={setSortBy} />
            </span>
            <span className="type">
              Type
              <Arrow sortBy="Type" setSortBy={setSortBy} />
            </span>
            <span className="universe">
              Univers
              <Arrow sortBy="Universe" setSortBy={setSortBy} />
            </span>
            <span className="duration">
              Durée
              <Arrow sortBy="Duration" setSortBy={setSortBy} />
            </span>
            <span className="likes">
              Likes
              <Arrow sortBy="Likes" setSortBy={setSortBy} />
            </span>
            <span className="active">
              On/Off
              <Arrow sortBy="Active" setSortBy={setSortBy} />
            </span>
          </div>
          {contents
            .filter((c) => {
              const regex = new RegExp(filter, "i");
              return regex.test(c.name + c.universe + c.type);
            })
            .sort(sortContents(sortBy))
            .map((c, i) => {
              return (
                <ContentItem
                  key={`content-${i}`}
                  name={c.name}
                  type={c.type}
                  universe={c.universe}
                  duration={c.duration}
                  likes={c.likes}
                  active={c.active}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Contents;
