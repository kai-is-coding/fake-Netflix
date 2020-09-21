import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import http from "../services/httpService";

import { getImagesURL } from "../utilities/getImagesURL";

import "../css/TrendingBox.css";

function TrendingBox({ mediaType }) {
  const history = useHistory();
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

  function handleDetailsPage(item) {
    if (item.media_type === "movie") {
      history.push(`/movie/${item.id}`);
    } else if (item.media_type === "tv") {
      history.push(`/tv/${item.id}`);
    }
  }

  return (
    <div className="trendingBox">
      {data.map((item) => {
        return (
          <img
            key={item.id}
            src={getImagesURL(item.poster_path)}
            alt={item.title}
            className="trendingBoxImages"
            onClick={() => handleDetailsPage(item)}
          />
        );
      })}
    </div>
  );
}

export default TrendingBox;
