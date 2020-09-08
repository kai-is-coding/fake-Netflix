import React, { useState, useEffect, Fragment } from "react";
import http from "../services/httpService";

function Home(props) {
  const [data, setData] = useState([]);

  async function getData() {
    const { data } = await http.get(
      `trending/movies/week?api_key=${http.api_key}`
    );
    console.log(data.results[0]);
    setData(data.results);
  }

  function getImagesURL(path) {
    return `https://image.tmdb.org/t/p/w200/${path}`;
  }

  useEffect(() => {
    getData();
    // console.log("data", data);
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {/* <div className="col">Movie</div> */}
          {data.map((item) => {
            return (
              <div className="col" key={item.id} style={{ margin: 10 }}>
                <img
                  src={getImagesURL(item.poster_path)}
                  alt={item.title}
                  className="float-left"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
