import React from "react";
import HeaderBar from "../components/HeaderBar";
import Button from "../components/Button";

function Error404() {
  return (
    <div id="Error404">
      <HeaderBar title="ERREUR 404" />
      <div className="mainContainer">
        <div className="msgContainer">
          <div className="header">
            <h2>Page introuvable</h2>
          </div>
          <div className="details">
            <p>
              La page demandée n'existe pas ou a été déplacée. Cliquez sur le
              bouton ci-dessous pour revenir à l'accueil.{" "}
            </p>
            <a href="/home">
              <Button text="Revenir à l'accueil" center />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
