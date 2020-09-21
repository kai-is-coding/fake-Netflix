import React, { useState, useEffect, Fragment } from "react";

import { getImagesURL } from "../utilities/getImagesURL";

import http from "../services/httpService";
import Pagination from "./common/Pagination";
import Image from "./common/Image";

function SearchResults(props) {
  const query = props.location.state.query;
  const mediaType = props.location.state.mediaType;
  const [results, setResults] = useState([]);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  function handlePageChange(page) {
    setPage(page);
  }

  useEffect(() => {
    setPage(1);
  }, [query, mediaType]);

  useEffect(() => {
    async function getData() {
      if (query) {
        const { data } = await http.get(
          `search/${mediaType}?api_key=${http.api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
        );
        setResults(data.results);
        setNumberOfResults(data.total_results);
        setTotalPages(data.total_pages);
      }
    }
    getData();
  }, [query, mediaType, page]);

  return (
    <Fragment>
      <div className="searchResults">
        <div className="row">
          <div className="col">{numberOfResults} results found</div>
          <div className="col">Sort by</div>
        </div>
        <div className="row">
          {results.map((item) => {
            return (
              <Image
                key={item.id}
                imageURL={getImagesURL(item.poster_path)}
                alt={item.title}
                className="images"
                style={{ margin: 10, width: 200, height: 280 }}
              />
            );
          })}
        </div>
        <div className="row" style={{}}>
          {totalPages > 0 ? (
            <Pagination
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              currentPage={page}
              paginationNumber={8}
            />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default SearchResults;
