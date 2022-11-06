import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartArea,
  faPalette,
  faQuestionCircle,
  faFileSignature,
  faDoorOpen,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function Nav() {
  const [cookies, setCookie] = useCookies(["login"]);
  let currentURI = useLocation().pathname;
  const [current, setCurrent] = useState(
    currentURI === "/" ? "home" : currentURI.replace("/", "")
  );

  useEffect(() => {
    if (currentURI === "/home") {
      setCurrent("home");
    }
  }, [currentURI]);

  return (
    <div id="Nav">
      <div className="logo"></div>
      <nav>
        <ul>
          <Link to="/maans_dashboard/home">
            <li
              className={current === "home" ? "active" : ""}
              onClick={() => {
                setCurrent("home");
              }}
            >
              <FontAwesomeIcon icon={faHome} />
              {current === "home" ? (
                <div className="hrActive"></div>
              ) : (
                <div className="hrInactive"></div>
              )}
            </li>
          </Link>
          <Link to="/maans_dashboard/dashboard">
            <li
              className={current === "dashboard" ? "active" : ""}
              onClick={() => {
                setCurrent("dashboard");
              }}
            >
              <FontAwesomeIcon icon={faChartArea} />
              {current === "dashboard" ? (
                <div className="hrActive"></div>
              ) : (
                <div className="hrInactive"></div>
              )}
            </li>
          </Link>
          <Link to="/maans_dashboard/contents">
            <li
              className={current === "contents" ? "active" : ""}
              onClick={() => {
                setCurrent("contents");
              }}
            >
              <FontAwesomeIcon icon={faHeadphonesAlt} />
              {current === "contents" ? (
                <div className="hrActive"></div>
              ) : (
                <div className="hrInactive"></div>
              )}
            </li>
          </Link>
          <Link to="/maans_dashboard/custom">
            <li
              className={current === "custom" ? "active" : ""}
              onClick={() => {
                setCurrent("custom");
              }}
            >
              <FontAwesomeIcon icon={faPalette} />
              {current === "custom" ? (
                <div className="hrActive"></div>
              ) : (
                <div className="hrInactive"></div>
              )}
            </li>
          </Link>
          <Link to="/maans_dashboard/contract">
            <li
              className={current === "contract" ? "active" : ""}
              onClick={() => {
                setCurrent("contract");
              }}
            >
              <FontAwesomeIcon icon={faFileSignature} />
              {current === "contract" ? (
                <div className="hrActive"></div>
              ) : (
                <div className="hrInactive"></div>
              )}
            </li>
          </Link>
          <Link to="/maans_dashboard/help">
            <li
              className={current === "help" ? "active" : ""}
              onClick={() => {
                setCurrent("help");
              }}
            >
              <FontAwesomeIcon icon={faQuestionCircle} />
              {current === "help" ? (
                <div className="hrActive"></div>
              ) : (
                <div className="hrInactive"></div>
              )}
            </li>
          </Link>
          <Link to="/maans_dashboard/">
            <li
              onClick={() => {
                if (cookies.login === "true") {
                  setCookie("login", false, { path: "/" });
                }
                setCurrent("login");
              }}
            >
              <FontAwesomeIcon icon={faDoorOpen} />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
