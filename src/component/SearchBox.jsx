import React, { useState, useEffect } from "react";
import http from "../services/httpService";

function SearchBox(props) {
  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("multi");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState([]);

  function handleInputChange(e) {
    // console.log(e.target.value);
    setQuery(e.target.value);
  }

  function handleSelectChange(e) {
    // console.log(e.target.value);
    setMediaType(e.target.value);
  }

  async function searchQuery() {
    if (query) {
      const { data } = await http.get(
        `search/${mediaType}?api_key=${http.api_key}&language=en-US&query=${query}&page=${page}&include_adult=false`
      );
      // console.log(data);
      setTotalPages(data.total_pages);
      setTotalResults(totalResults.concat(data.results));
      setPage(page + 1);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("Clicked!");
    searchQuery();
  }

  useEffect(() => {
    searchQuery();
    // return console.log("total results", totalResults);
    if (page > totalPages) {
      return () => {
        setQuery("");
        console.log("total results", totalResults);
      };
    }
  }, [page]);

  return (
    <form
      className="input-group mb-3"
      style={{ marginTop: 30 }}
      onSubmit={handleSubmit}
    >
      <select
        className="custom-select w-15"
        id="inputGroupSelect01"
        value={mediaType}
        onChange={handleSelectChange}
      >
        <option value="multi">All</option>
        <option value="movie">Movie</option>
        <option value="tv">TV</option>
        <option value="people">People</option>
      </select>
      <input
        type="text"
        className="form-control w-75"
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-secondary w-10" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
