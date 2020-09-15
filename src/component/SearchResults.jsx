import React, { useState, useEffect, Fragment } from "react";

import { getImagesURL } from "../utilities/getImagesURL";

import http from "../services/httpService";
import Pagination from "./common/Pagination";
// import ReactPaginate from "react-paginate";

const SearchResults = (props) => {
  const query = props.location.state.query;
  const mediaType = props.location.state.mediaType;
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  function handlePageChange(page) {
    console.log("page clicked!");
    setPage(page);
  }

  useEffect(() => {
    async function getData() {
      if (query) {
        const { data } = await http.get(
          `search/${mediaType}?api_key=${http.api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
        );
        setResults(data.results);
        setTotalPages(data.total_pages);
        // console.log(results);
      }
    }
    getData();
  }, [query, mediaType, page]);

  return (
    <Fragment>
      <div className="container" style={{ display: "block" }}>
        <div className="row">
          {results.map((item) => {
            return (
              <img
                key={item.id}
                src={getImagesURL(item.poster_path)}
                alt={item.title}
                className="images"
                style={{ margin: 10 }}
              />
            );
          })}
        </div>
        {/* <ReactPaginate /> */}
        {totalPages > 0 ? (
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            currentPage={page}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default SearchResults;
