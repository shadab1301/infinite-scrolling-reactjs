import React from "react";

const MovieCard = ({ myData }) => {
  const { title, body, id } = myData;

  console.log("Props are ", myData)
  return (
    <div className="card">
      <div className="card-info">
        <p className="card-id">{id}</p>
        <p>{body.substr(0, 150)}</p>
        <h2 className="card-heading">{title.substr(0, 20)}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
