import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=5ddb805&";

const App = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    setHasSearched(true);
  };

  return (
    <div className="app">
      <h1>MovieHunt</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {hasSearched ? (
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found.</h2>
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
