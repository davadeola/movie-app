import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import NomItem from "./NomItem";

function NominationList({ downModal }) {
  const { nomMovies } = useContext(GlobalContext);

  return (
    <div className="modal-content">
      <div className="row">
        <h2>Your Nominations</h2>
        <h2 className="pointer" onClick={() => downModal()}>
          X
        </h2>
      </div>

      {nomMovies.map((nom) => (
        <NomItem key={nom.imdbID} title={nom.Title} imdbID={nom.imdbID} />
      ))}
    </div>
  );
}

export default NominationList;
