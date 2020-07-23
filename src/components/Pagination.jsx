import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ pagesNumber, currentPage, setCurrentPage }) {
  const incrementPage = () => {
    if (currentPage < pagesNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => decrementPage()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={() => incrementPage()}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
export default Pagination;
