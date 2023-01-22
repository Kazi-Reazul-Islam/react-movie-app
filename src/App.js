import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/App.css";
import { MovieCard } from "./components/MovieCard";

const App = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movies-app.prakashsakari.repl.co/api/movies"
      );
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading-1">Movies</h1>
      </header>
      <br />
      <div className="main">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default App;
