import React, { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import { useState } from "react";

const API_URL = "http://www.omdbapi.com?apikey=6aa9076b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const movie1 = {
    Title: "Spiderman",
    Year: "2010",
    imdbID: "tt1785572",
    Type: "movie",
    Poster: "N/A",
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <>
      <div className="app">
        <h1>MovieHub</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
