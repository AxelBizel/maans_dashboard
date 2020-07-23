import React, { useState, useEffect, useRef } from "react";
import HeaderBar from "../components/HeaderBar";
import Theme from "../components/Theme";
import Button from "../components/Button";
import SelectButton from "../components/SelectButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import themes from "../assets/data/themes.js";
import defaultMoods from "../assets/data/moods";

function Customization() {
  const [mood, setMood] = useState(null);
  const [moods, setMoods] = useState(defaultMoods);
  const addMoodInput = useRef(null);
  const msgInput = useRef(null);

  useEffect(() => {
    if (moods === null) {
      setMoods(defaultMoods);
    }
  }, [moods]);

  const addMood = () => {
    if (mood) {
      const newMoods = [...moods, { mood: mood, active: true }];
      setMoods(newMoods);
      setMood(null);
      addMoodInput.current.value = "";
    }
  };

   return (
    <div id="Customization">
      <HeaderBar title="Personnalisation" seatToggler />
      <div className="mainContainer">
        {/* __________THEMES SECTION _____________*/}
        <div className="section themes">
          <div className="sectionHeader themes">
            <h2>Choisir un thème</h2>
          </div>
          <div className="container themes">
            {themes.map((t, i) => {
              return (
                <Theme
                  key={`theme-${i}`}
                  name={t.name}
                  bgColor={t.bgColor}
                  txtColor={t.txtColor}
                  id={t.id}
                />
              );
            })}
          </div>
        </div>

        {/* __________MSG SECTION _____________*/}
        <div className="section msg">
          <div className="sectionHeader msg">
            <h2>Message d'accueil</h2>
          </div>
          <div className="container msg">
            <p>
              Ajouter un message personnalisé sur l'écran d'accueil de
              l'application :
            </p>
            <textarea
              ref={msgInput}
              id={msgInput}
             
            />
            <Button text="Valider" center />
          </div>
        </div>

        {/* __________POPUP SECTION _____________*/}

        <div className="section popup">
          <div className="sectionHeader popup">
            <h2>Pop-up finale</h2>
          </div>
          <div className="container popup">
            <p>
              Sélectionnez ou désactivez les mots à afficher en fin de
              session...{" "}
            </p>
            <div className="selectButtonsContainer">
              {moods
                ? moods.map((m, i) => (
                    <SelectButton
                      text={m.mood}
                      center
                      key={`mood-${i}`}
                      isSelected={m.active}
                    />
                  ))
                : false}
            </div>

            <div className="addInputAndButton">
              <input
                ref={addMoodInput}
                className="addInput"
                type="text"
                placeholder="...ou ajoutez le vôtre"
                onChange={(e) => setMood(e.target.value)}
              />

              <button
                className="addButton"
                type="submit"
                onClick={() => addMood()}
              >
                <FontAwesomeIcon className="addIcon" icon={faPlus} />
              </button>
            </div>
            <div className="popupButtons">
              <Button text="Valider" />
              <Button text="Réinitialiser" action={() => setMoods(null)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customization;
