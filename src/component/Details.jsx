import React from "react";

const Details = ({ match }) => {
  const { id } = match.params;
  return (
    <div>
      <h1>Details of {id}</h1>
    </div>
  );
};

export default Details;
