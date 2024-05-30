import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import Login from "./components/Login";

const App = () => {
  // State variables
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Handle login function
  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  // Handle logout function
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  // Function to fetch movie data from the API
  const getMovieRequest = useCallback(async (searchValue) => {
    if (loggedIn) {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  }, [loggedIn]);

  // useEffect hook to fetch movies when searchValue or loggedIn state changes
  useEffect(() => {
    const fetchMovies = async () => {
      if (loggedIn) {
        getMovieRequest(searchValue);
      }
    };

    fetchMovies();
  }, [searchValue, loggedIn, getMovieRequest]);

  // Render the component
  return (
    <div className="app container mt-5">
      {loggedIn ? (
        <div className="movie-app">
          <div className="row d-flex mt-4">
            <MovieListHeading heading="Movies" />
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className="row">
            <MovieList movies={movies} />
          </div>
          <button className="btn btn-primary mt-3" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
