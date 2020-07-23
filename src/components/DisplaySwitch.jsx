import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faThList } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";

function DisplaySwitch() {
  const [cookies, setCookie] = useCookies(["displayCookie"]);

  useEffect(() => {
    if (!cookies.displayCookie) {
      setCookie("displayCookie", "grid", { path: "/" });
    }
  });

  return (
    <div className="displaySwitch">
      <div
        onClick={() => {
          setCookie("displayCookie", "grid", { path: "/" });
        }}
        className={cookies.displayCookie === "grid" ? "isActive" : ""}
      >
        <FontAwesomeIcon icon={faThLarge} className="displaySwitchIcon" />
      </div>
      <div
        onClick={() => {
          setCookie("displayCookie", "list", { path: "/" });
        }}
        className={cookies.displayCookie === "list" ? "isActive" : ""}
      >
        <FontAwesomeIcon icon={faThList} className="displaySwitchIcon" />
      </div>
    </div>
  );
}

export default DisplaySwitch;
