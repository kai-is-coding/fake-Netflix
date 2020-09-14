import React, { useState, useEffect } from "react";
import http from "../services/httpService";

import { getImagesURL } from "../utilities/getImagesURL";

import "../css/TrendingBox.css";

function TrendingBox({ mediaType }) {
  const [data, setData] = useState([]);

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
  );
}

export default TrendingBox;
