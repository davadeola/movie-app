import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

import MovieResult from "./components/MovieResult";
import SearchBar from "./components/SearchBar";
import NominationModal from "./components/NominationModal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const upModal = () => {
    setShowModal(true);
  };

  const downModal = () => {
    setShowModal(false);
  };

  return (
    <GlobalProvider>
      <div className="App">
        {showModal && <NominationModal downModal={downModal} />}
        <div className="row">
          <button onClick={upModal}>My Nominations</button>
          <SearchBar />
        </div>

        <MovieResult />
      </div>
    </GlobalProvider>
  );
}

export default App;
