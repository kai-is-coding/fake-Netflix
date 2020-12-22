import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Event } from './Tracking/index';

function SearchBox(props) {
  const history = useHistory();

  const [query, setQuery] = useState("");
  const [mediaType, setMediaType] = useState("multi");

  function handleInputChange(e) {
    // console.log(e.target.value);
    setQuery(e.target.value);
  }

  function handleSelectChange(e) {
    // console.log(e.target.value);
    setMediaType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Event("Button", "Clicked Search Button", "Search_Page")
    history.push(`/search/${mediaType}`, { query, mediaType });
  }

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
        <option value="person">People</option>
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
