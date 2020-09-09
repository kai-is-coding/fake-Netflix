import React, { useState, useEffect } from "react";
import http from "../services/httpService";

import "../css/TrendingBox.css";

function TrendingBox({ mediaType }) {
  // console.log("props", props);
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(true);

  async function getData() {
    if (mounted) {
      const { data } = await http.get(
        `trending/${mediaType}/week?api_key=${http.api_key}`
      );
      // console.log(data.results[0]);
      setData(data.results);
    }
  }

  function getImagesURL(path) {
    return `https://image.tmdb.org/t/p/w200/${path}`;
  }

  useEffect(() => {
    getData();

    return () => {
      setMounted(false);
    };
  });

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
