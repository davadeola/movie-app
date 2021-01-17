import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

function MovieDetail({ selectedMovie }) {
  const { nominateMovie, nomMovies, undoMovie } = useContext(GlobalContext);
  const [isNominated, setIsNominated] = useState(false);

  useEffect(() => {
    let val = nomMovies.some((movie) => selectedMovie.imdbID === movie.imdbID);
    setIsNominated(val);
  }, [selectedMovie, nomMovies]);

  return (
    <div>
      {selectedMovie !== undefined && selectedMovie.imdbID !== "" ? (
        <div className=" movie-detail-container">
          <div className="col-60">
            <h2>{selectedMovie.Title}</h2>
            <div className="row">
              <h3>{selectedMovie.Year}</h3>
            </div>
          </div>
          <div className="col-40">
            {!isNominated && nomMovies.length < 5 && (
              <button
                onClick={() => nominateMovie(selectedMovie.imdbID)}
                style={{ visibility: `${nomMovies.length >= 5 && "hidden"}` }}
              >
                Nominate
              </button>
            )}

            {isNominated && nomMovies.length < 5 && (
              <button onClick={() => undoMovie(selectedMovie.imdbID)}>
                Undo
              </button>
            )}
            {nomMovies.length >= 5 ? (
              <h4>Your spots are full</h4>
            ) : (
              <h4>Spots left: {5 - nomMovies.length}/5</h4>
            )}
          </div>
        </div>
      ) : (
        <div className=" movie-detail-container">
          <h1>Choose a movie to nominate</h1>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
