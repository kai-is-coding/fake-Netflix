import React, { useState, useEffect } from "react";
import _ from "lodash";

function Pagination({ totalPages, handlePageChange, currentPage }) {
  const [numberOfPagination, setNumberOfPagination] = useState(8);
  const [paginationStartNumber, setPaginationStartNumber] = useState(1);
  const [restPages, setRestPages] = useState(totalPages);

  function handlePaginationDisplay(direction) {
    if (restPages > numberOfPagination && direction === "&raquo;") {
      setPaginationStartNumber(paginationStartNumber + numberOfPagination);
      setRestPages(restPages - numberOfPagination);
    } else if (direction === "&laquo;") {
      setPaginationStartNumber(paginationStartNumber - numberOfPagination);
      setRestPages(restPages + numberOfPagination);
    }
  }

  useEffect(() => {
    setPaginationStartNumber(1);
    setNumberOfPagination(8);
    setRestPages(totalPages);
    if (totalPages < numberOfPagination) {
      setNumberOfPagination(totalPages);
    }
  }, [totalPages]);

  function renderPagination(i) {
    return (
      <li
        className={currentPage === i ? "page-item active" : "page-item"}
        key={i}
      >
        <button className="page-link" onClick={() => handlePageChange(i)}>
          {i}
        </button>
      </li>
    );
  }

  function determineDisabled(target) {
    if (currentPage === 1 && target === "previous") {
      return "disabled";
    } else if (
      paginationStartNumber < numberOfPagination &&
      target === "&laquo;"
    ) {
      return "disabled";
    } else if (restPages <= numberOfPagination && target === "&raquo;") {
      return "disabled";
    } else if (currentPage === totalPages && target === "next") {
      return "disabled";
    }
  }

  return (
    <div style={{ margin: "auto" }}>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${determineDisabled("previous")}`}>
            <button className="page-link">Previous</button>
          </li>
          <li className={`page-item ${determineDisabled("&laquo;")}`}>
            <button
              className="page-link"
              onClick={() => handlePaginationDisplay("&laquo;")}
            >
              &laquo;
            </button>
          </li>

          {_.range(
            paginationStartNumber,
            paginationStartNumber + numberOfPagination
          ).map((i) => renderPagination(i))}
          <li className={`page-item ${determineDisabled("&raquo;")}`}>
            <button
              className="page-link"
              onClick={() => handlePaginationDisplay("&raquo;")}
            >
              &raquo;
            </button>
          </li>
          <li className={`page-item ${determineDisabled("next")}`}>
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
