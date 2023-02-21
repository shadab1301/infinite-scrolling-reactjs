import React from "react";
import MovieCard from "./Moviecard";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
