import React, { useContext, useEffect } from "react";
import loader from "./../images/loader.svg";
import MovieDetail from "./MovieDetail";
import MovieDisplay from "./MovieDisplay";

import { GlobalContext } from "../context/GlobalState";

function MovieResult() {
  const {
    movies,
    getMovies,
    selectedMovie,
    getLocalNom,
    nomMovies,
  } = useContext(GlobalContext);

  useEffect(() => {
    getMovies();
    getLocalNom();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveToLocalStorage = (movies) => {
    localStorage.setItem("react-nominated-list", JSON.stringify(movies));
  };

  useEffect(() => {
    saveToLocalStorage(nomMovies);
  }, [nomMovies]);

  return (
    <div>
      {movies != undefined ? (
        <MovieDisplay movies={movies} />
      ) : (
        <img
          src={loader}
          style={{
            display: "block",
            margin: "0 auto",
          }}
        />
      )}
      <MovieDetail selectedMovie={selectedMovie[0]} />
    </div>
  );
}

export default MovieResult;
