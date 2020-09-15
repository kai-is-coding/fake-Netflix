import React, { useState, useEffect } from "react";

function Pagination({ totalPages, handlePageChange, currentPage }) {
  const [numberOfPagination, setNumberOfPagination] = useState(8);
  const [currentPageNumbers, setCurrentPageNumbers] = useState(1);
  const [restPage, setRestPages] = useState(totalPages);

  function handlePaginationDisplay() {
    setRestPages(totalPages - numberOfPagination);
    // console.log("clicked!", restPage);
  }

  useEffect(() => {
    if (totalPages > numberOfPagination) {
      setCurrentPageNumbers(numberOfPagination);
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
          {Array.from(
            { length: currentPageNumbers },
            (_, i) => i + 1
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
