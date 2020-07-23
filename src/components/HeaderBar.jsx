import React, { useState, useEffect } from "react";
import SeatToggler from "./SeatToggler";
import DisplaySwitch from "./DisplaySwitch";
import SearchInput from "./SearchInput";
import ContentModal from "./ContentModal";
import { useCookies } from "react-cookie";

function HeaderBar({
  title,
  seatToggler,
  addButton,
  displaySwitch,
  searchInput,
  setFilter,
}) {
  const [cookies] = useCookies(["login"]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (cookies.login === "true") {
      setLoggedIn(true);
    }

    if (cookies.login === "false") {
      setLoggedIn(false);
    }
  }, [cookies.login]);

  return (
    <div id="HeaderBar" className={!loggedIn ? "fullWidth" : undefined}>
      <h1 className="title">{title}</h1>
      {searchInput && addButton ? (
        <>
          <SearchInput setFilter={setFilter} />
          <ContentModal />
        </>
      ) : searchInput ? (
        <SearchInput setFilter={setFilter} />
      ) : addButton ? (
        <ContentModal />
      ) : (
        false
      )}

      {displaySwitch ? <DisplaySwitch /> : false}
      {seatToggler ? <SeatToggler /> : false}
    </div>
  );
}

export default HeaderBar;
