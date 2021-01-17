import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalState";

function Movie({ movieImg, imdbID, selected }) {
  const { selectMovie, nomMovies } = useContext(GlobalContext);
  const [isNominated, setIsNominated] = useState(false);

  const onSelectMovie = (id) => {
    selectMovie(id);
  };

  useEffect(() => {
    let val = nomMovies.some((movie) => imdbID === movie.imdbID);
    setIsNominated(val);
  }, [nomMovies, imdbID]);

  return (
    <div className={`movie-container ${selected && "movie-selected"}`}>
      <img
        className="movie-poster"
        src={movieImg}
        alt="movieImg"
        onClick={() => {
          onSelectMovie(imdbID);
        }}
      />
      {isNominated && (
        <div className="nominate-tag">
          <h4>NOMINATED</h4>
        </div>
      )}
    </div>
  );
}

export default Movie;
