import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";

import http from "../services/httpService";
import { getDataURL } from "../utilities/getDataURL";

const Details = ({ match, history }) => {
  const { id } = match.params;
  const { pathname } = history.location;

  const [data, setData] = useState({});
  const [videoKey, setVideoKey] = useState("");

  function getVideoKey({ results }) {
    const { key } = results.filter((item) =>
      item.name.includes("Official Trailer")
    )[0];
    // console.log(key);
    setVideoKey(key);
  }

  const getData = useCallback(async () => {
    if (pathname.startsWith("/movie")) {
      const { data: details } = await http.get(getDataURL("movie", id));
      const { data: videoKey } = await http.get(
        getDataURL("movie", id, "videos")
      );
      // console.log(details);
      setData(details);
      getVideoKey(videoKey);
    } else if (pathname.startsWith("/tv")) {
      const { data: details } = await http.get(getDataURL("tv", id));
      // console.log(details);
      setData(details);
    }
  }, [pathname, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  const { title, status, release_date, vote_average, runtime, overview } = data;
  return (
    <div className="container">
      <div className="row">
        <div className="col">{title}</div>
        <div className="col">Share Buttons!!</div>
      </div>
      <div className="row">
        <div className="col">{status}</div>
        <div className="col">{release_date}</div>
        <div className="col">{vote_average}</div>
        <div className="col">{runtime} mins</div>
      </div>
      <div className="row">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoKey}`} />
      </div>
      <div className="row">
        <p>{overview}</p>
      </div>
      <div className="row">Cast</div>
    </div>
  );
};

export default Details;
