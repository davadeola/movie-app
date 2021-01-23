import React from "react";
import Movie from "./Movie";
import { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

function MovieDisplay({ movies }) {
  const { selectedMovie } = useContext(GlobalContext);

  return (
    <div className="movie-display">
      {movies.map((movie) => (
        <Movie
          movieImg={movie.Poster}
          key={movie.imdbID}
          title={movie.Title}
          imdbID={movie.imdbID}
          selected={
            selectedMovie[0].imdbID === movie.imdbID && selectedMovie.length > 0
          }
        />
      ))}
    </div>
  );
}

export default MovieDisplay;
