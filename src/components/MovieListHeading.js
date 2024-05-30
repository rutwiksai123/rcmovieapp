import React from "react";

const MovieListHeading = (props) => {
  // Display the heading for the movie list
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  );
};
 export default MovieListHeading;