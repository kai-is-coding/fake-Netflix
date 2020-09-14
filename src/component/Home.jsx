import React, { Fragment, useState } from "react";
import TrendingBox from "./TrendingBox";

function Home(props) {
  // // console.log(props);
  // const [reload, setReload] = useState(false);
  // setReload(props.location.state);
  // if (reload) {
  //   // window.location.reload();
  //   setReload(false);
  // }
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
