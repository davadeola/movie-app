import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  movies: [],
  nomMovies: [],
  selectedMovie: [{ imdbID: "" }],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getMovies() {
    try {
      const res = await axios.get(
        "http://www.omdbapi.com/?s=all&apikey=7619d5ee"
      );

      dispatch({ type: "GET_MOVIES", payload: res.data.Search });
    } catch (err) {
      console.log(err);
    }
  }

  async function searchMovie(value) {
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${value}&apikey=7619d5ee`
    );
    dispatch({ type: "SEARCH_MOVIE", payload: res.data.Search });
  }

  function selectMovie(id) {
    dispatch({ type: "SELECT_MOVIE", payload: id });
  }

  function nominateMovie(id) {
    dispatch({ type: "NOMINATE_MOVIE", payload: id });
  }

  function undoMovie(id) {
    dispatch({ type: "UNDO_MOVIE", payload: id });
  }

  return (
    <GlobalContext.Provider
      value={{
        movies: state.movies,
        nomMovies: state.nomMovies,
        selectedMovie: state.selectedMovie,
        getMovies,
        searchMovie,
        nominateMovie,
        selectMovie,
        undoMovie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
