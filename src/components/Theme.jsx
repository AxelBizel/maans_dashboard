import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

function Theme({ id, name, bgColor, txtColor }) {
  const [cookies, setCookie] = useCookies(["themeCookie"]);

  useEffect(() => {
    if (!cookies.themeCookie) {
      setCookie("themeCookie", 1, { path: "/" });
    }
  });


  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className={parseInt(cookies.themeCookie) === id ? "theme isActive" : "theme"}
      onClick={() => {
        setCookie("themeCookie", id, { path: "/" });
      }}
    >
      <p className="name" style={{color:`${txtColor}` }}>{name}</p>
    </div>
  );
}

export default Theme;
