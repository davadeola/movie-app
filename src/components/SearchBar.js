import React, { useState, useContext } from "react";
import search from "./../images/search.png";
import { GlobalContext } from "./../context/GlobalState";
function SearchBar() {
  const { searchMovie } = useContext(GlobalContext);
  const [searchValue, setSearchValue] = useState("all");

  const handleSearch = (e) => {
    let value = e.target.value;

    setSearchValue(value);
    searchMovie(value);
  };

  const onSearch = () => {
    searchMovie(searchValue);
  };

  return (
    <div className="row">
      <input placeholder="Search for a movie by name" onChange={handleSearch} />
      <img src={search} alt="Search icon" onClick={onSearch} />
    </div>
  );
}

export default SearchBar;
