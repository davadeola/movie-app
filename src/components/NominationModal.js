import React from "react";
import NominationList from "./NominationList";

function NominationModal({ downModal }) {
  return (
    <div className="modal-container">
      <NominationList downModal={downModal} />
    </div>
  );
}

export default NominationModal;
