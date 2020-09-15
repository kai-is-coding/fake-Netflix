import React, { Fragment } from "react";
import TrendingBox from "./TrendingBox";

function Home(props) {
  return (
    <Fragment>
      <div className="container" style={{ display: "block" }}>
        <h2>Movie</h2>
        <div className="row">
          <TrendingBox mediaType="movie" />
        </div>
        <h2>TV</h2>
        <div className="row">
          <TrendingBox mediaType="tv" />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
