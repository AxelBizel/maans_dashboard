import React, { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import { useCookies } from "react-cookie";
import Button from "../components/Button";
import { Redirect } from "react-router-dom";

function Login() {
  const [cookies, setCookie] = useCookies(["login"]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies.login === "true") {
      setLoggedIn(true);
    }
  }, [cookies.login]);

  return (
    <>
      {loggedIn === true ? (
        <Redirect to="/home" />
      ) : (
        <div id="Login">
          <HeaderBar title="Login" />
          <div className="mainContainer">
            <div className="formContainer">
              <div className="header">
                <h2>Maans</h2>
              </div>
              <div className="details">
                <form>
                  <div>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                      type="text"
                      className="textInput"
                      name="username"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                      type="password"
                      className="textInput"
                      name="password"
                      required
                    />
                  </div>
                  <div className="formButton">
                    <Button
                      text="Valider"
                      center
                      submit
                      action={() => {
                        setCookie("login", true, { path: "/" });
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
