import React from "react";

function Pagination({ totalPages }) {
  // function renderPagination() {
  //   for (let i = 0; i <= 8; i++) {
  //     return (
  //       <li className="page-item">
  //         <a className="page-link" href="#">
  //           {i}
  //         </a>
  //       </li>
  //     );
  //   }
  // }
  return (
    <div>
      {/* <nav aria-label="Page navigation example"> */}
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#/" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {() => {
          for (let i = 0; i <= 8; i++) {
            return (
              <li className="page-item">
                <a className="page-link" href="#/">
                  {i}
                </a>
              </li>
            );
          }
        }}
        <li className="page-item">
          <a className="page-link" href="#/" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
      {/* </nav> */}
    </div>
  );
}

export default Pagination;
