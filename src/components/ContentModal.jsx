import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Plus from "../assets/img/AddButton.png";

function ContentModal() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState(false);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="ContentModal">
      <button
        className="circle"
        onClick={() => {
          setModal(!modal);
        }}
      >
        <img id="addSign" src={Plus} alt="+" />
      </button>

      {modal ? (
        <div className="modal_bg">
          <div className="modal">
            <div className="modalHeader">
              <h2>Ajouter un contenu</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formWrapper">
                {/* __________TITRE__________ */}

                <label htmlFor="title">Titre</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="textInput"
                  ref={register({ required: true })}
                />
                {errors.title && "Le titre est requis"}

                {/* __________AUTEUR__________ */}

                <label htmlFor="title">Auteur</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  className="textInput"
                  ref={register({ required: true })}
                />
                {errors.author && "L'auteur' est requis"}

                {/* __________TYPE__________ */}
                <label htmlFor="type">Type </label>
                <input
                  name="type"
                  list="contentTypes"
                  className="textInput"
                  id="type"
                  ref={register({ required: true })}
                  onChange={(e) => setType(e.target.value)}
                />
                <datalist id="contentTypes">
                  <option value="Musique"  />
                  <option value="Podcast" />
                  <option value="Poeme" />
                  <option value="Livre Audio" />
                  <option value="Sophrologie" />
                  <option value="Méditation" />
                </datalist>

                {errors.type && (
                  <span>Veuillez renseigner un type de contenu</span>
                )}

                {/* __________STYLE__________ */}

                {type === "Musique" ? (
                  <>
                    <label htmlFor="title">Style</label>
                    <input
                      type="text"
                      name="style"
                      id="style"
                      className="textInput"
                      ref={register({ required: true })}
                    />
                    {errors.style && "Le style est requis"}
                  </>
                ) : (
                  false
                )}

                {/* __________UNIVERS__________ */}
                <label htmlFor="universe">Univers </label>
                <input
                  name="universe"
                  list="contentUniverses"
                  id="universe"
                  className="textInput"
                  ref={register({ required: true })}
                  multiple
                />
                <datalist id="contentUniverses">
                  <option value="Détente" />
                  <option value="Concentration" />
                  <option value="Méditation" />
                  <option value="Sophrologie" />
                  <option value="Évasion" />
                </datalist>
                {errors.universe && <span>Veuillez renseigner un univers</span>}

                {/* __________IMAGE__________ */}
                <label htmlFor="img">Image </label>
                <input
                  className="fileInput"
                  type="file"
                  id="img"
                  name="img"
                  accept="images/*"
                  ref={register({ required: true })}
                />

                {/* __________FICHIER AUDIO__________ */}
                <label htmlFor="file">Fichier audio</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="audio/*"
                  className="fileInput"
                  ref={register({ required: true })}
                />
              </div>

              <div className="contentButtons">
                <Button submit action={() => setModal(!modal)} text="Valider" />
                <Button action={() => setModal(!modal)} text="Annuler" />
              </div>
            </form>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default ContentModal;
