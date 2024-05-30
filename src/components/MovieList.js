import React from "react";

const MovieList = (props) => {
  // Display the list of movies in a grid layout
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-md-3 mb-3" key={movie.imdbID}>
          {/* Each movie is displayed within a Bootstrap card */}
          <div className="card">
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">Year: {movie.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
