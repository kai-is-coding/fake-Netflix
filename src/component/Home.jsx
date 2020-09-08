import React, { Fragment } from "react";
import TrendingBox from "./TrendingBox";
// import http from "../services/httpService";

function Home(props) {
  return (
    <Fragment>
      <div className="container" style={{ display: "block" }}>
        <div className="row">
          <h2>Movie</h2>
          <TrendingBox mediaType="movie" />
        </div>
        <div className="row">
          <h2>TV</h2>
          <TrendingBox mediaType="tv" />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
