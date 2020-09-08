import React, { useEffect } from "react";
import http from "../services/httpService";

function Home(props) {
  async function getData() {
    const data = await http.get(
      // "trending/movie/day?api_key=8f56203d1e18cdbbd64752b7aaaf756e"
      `trending/movies/day?api_key=${http.api_key}`
    );
    console.log(data);
  }

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
