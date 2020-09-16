import React, { useState, useEffect } from "react";
import _ from "lodash";

function Pagination({
  totalPages,
  handlePageChange,
  currentPage,
  paginationNumber,
}) {
  const [numberOfPagination, setNumberOfPagination] = useState(
    paginationNumber
  );
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
    handlePageChange(paginationStartNumber);
  }, [paginationStartNumber]);

  useEffect(() => {
    setPaginationStartNumber(1);
    setNumberOfPagination(paginationNumber);
    setRestPages(totalPages);
    if (totalPages < numberOfPagination) {
      setNumberOfPagination(totalPages);
    }
  }, [totalPages]);

  function renderPagination() {
    return _.range(
      paginationStartNumber,
      paginationStartNumber + numberOfPagination
    ).map((i) => {
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
    });
  }

  function determineDisabled(target) {
    if (paginationStartNumber < numberOfPagination && target === "&laquo;") {
      return "disabled";
    } else if (restPages <= numberOfPagination && target === "&raquo;") {
      return "disabled";
    }
  }

  return (
    <div style={{ margin: "auto" }}>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${determineDisabled("&laquo;")}`}>
            <button
              className="page-link"
              onClick={() => handlePaginationDisplay("&laquo;")}
            >
              &laquo;
            </button>
          </li>
          {renderPagination()}
          <li className={`page-item ${determineDisabled("&raquo;")}`}>
            <button
              className="page-link"
              onClick={() => handlePaginationDisplay("&raquo;")}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
