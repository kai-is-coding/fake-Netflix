import React, { useState, useEffect } from "react";
import _ from "lodash";

function Pagination({ totalPages, handlePageChange, currentPage }) {
  const [numberOfPagination, setNumberOfPagination] = useState(8);
  const [paginationStartNumber, setPaginationStartNumber] = useState(1);
  // const [currentPageNumbers, setCurrentPageNumbers] = useState(1);
  const [restPage, setRestPages] = useState(totalPages);

  function handlePaginationDisplay() {
    setPaginationStartNumber(paginationStartNumber + numberOfPagination);
    // setRestPages(totalPages - numberOfPagination);
    // console.log("clicked!", restPage);
  }

  useEffect(() => {
    if (totalPages < numberOfPagination) {
      setNumberOfPagination(totalPages);
    }
  }, []);

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

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">Previous</button>
          </li>
          {_.range(
            paginationStartNumber,
            paginationStartNumber + numberOfPagination
          ).map((i) => renderPagination(i))}
          <li className="page-item">
            <button className="page-link" onClick={handlePaginationDisplay}>
              ...
            </button>
          </li>
          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
