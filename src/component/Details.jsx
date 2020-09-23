import React, { useEffect } from "react";

import http from "../services/httpService";

const Details = ({ match, history }) => {
  const { id } = match.params;
  const { pathname } = history.location;

  async function getData() {
    if (pathname.startsWith("/movie")) {
      const { data } = await http.get(
        `movie/${id}?api_key=${http.api_key}&language=en-US`
      );
      console.log(data);
    } else if (pathname.startsWith("/tv")) {
      const { data } = await http.get(
        `tv/${id}?api_key=${http.api_key}&language=en-US`
      );
      console.log(data);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Detail of {id}</h1>
    </div>
  );
};

export default Details;
