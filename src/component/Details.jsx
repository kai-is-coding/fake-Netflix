import React from "react";

const Details = ({ match, history }) => {
  const { id } = match.params;
  // const { path } = match.history;
  console.log(history);
  return (
    <div>
      <h1>Details of {id}</h1>
    </div>
  );
};

export default Details;
