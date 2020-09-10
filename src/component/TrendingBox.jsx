import React, { useState, useEffect } from "react";
import http from "../services/httpService";

import "../css/TrendingBox.css";

function TrendingBox({ mediaType }) {
  const [data, setData] = useState([]);

  function getImagesURL(path) {
    return `https://image.tmdb.org/t/p/w200/${path}`;
  }

  useEffect(() => {
    async function getData() {
      const { data } = await http.get(
        `trending/${mediaType}/week?api_key=${http.api_key}`
      );
      setData(data.results);
    }
    getData();
  }, [mediaType]);

  return (
    <div>
      <div className="container">
        {data.map((item) => {
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
  );
}

export default TrendingBox;
