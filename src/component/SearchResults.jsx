import React, { useState, useEffect, Fragment } from "react";

import { getImagesURL } from "../utilities/getImagesURL";

import http from "../services/httpService";
import Pagination from "./common/Pagination";

const SearchResults = (props) => {
  const query = props.location.state.query;
  const mediaType = props.location.state.mediaType;
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  async function getData() {
    if (query) {
      const { data } = await http.get(
        `search/${mediaType}?api_key=${http.api_key}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      setResults(data.results);
      setTotalPages(data.total_pages);
      // console.log(results);
    }
  }

  useEffect(() => {
    getData();
    // console.log(results);
    // return () => {
    //   console.log(results);
    // };
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {results.map((item) => {
            return (
              <img
                key={item.id}
                src={getImagesURL(item.poster_path)}
                alt={item.title}
                className="images"
              />
            );
          })}
        </div>
      </div>
      {/* <Pagination totalPages={totalPages} /> */}
      <Pagination />
    </Fragment>
  );
};

export default SearchResults;
