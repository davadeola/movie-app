export default (state, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "SEARCH_MOVIE":
      return {
        ...state,
        movies: action.payload,
      };

    case "SELECT_MOVIE":
      return {
        ...state,
        selectedMovie: state.movies.filter(
          (movie) => movie.imdbID === action.payload
        ),
      };

    case "NOMINATE_MOVIE":
      return {
        ...state,
        nomMovies: [
          ...state.nomMovies,
          state.movies.filter((movie) => movie.imdbID === action.payload)[0],
        ],
      };

    case "UNDO_MOVIE":
      return {
        ...state,
        nomMovies: [
          ...state.nomMovies.filter((movie) => movie.imdbID !== action.payload),
        ],
      };

    default:
      return state;
  }
};
