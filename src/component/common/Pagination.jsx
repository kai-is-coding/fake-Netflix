import React from "react";

function Pagination({ totalPages }) {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#/" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => {
            return (
              <li className="page-item" key={i}>
                <a className="page-link" href="#/">
                  {i}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a className="page-link" href="#/" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
