import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function NomItem({ imdbID, title }) {
  const { undoMovie } = useContext(GlobalContext);

  return (
    <div className="row nom-item">
      <h5>{title}</h5>
      <button onClick={() => undoMovie(imdbID)}>Remove</button>
    </div>
  );
}

export default NomItem;
