import React from "react";
import { FaSearch } from "react-icons/fa";

function Search(props) {
  const search = (event) => {
    event.preventDefault();
    /* Try to substitute this \/ for React Refs as Dinesh said 
    https://reactjs.org/docs/refs-and-the-dom.html
    https://reactjs.org/docs/forwarding-refs.html*/
    const searchString = document.getElementById("searchBox").value;
    props.setSearchQuery(searchString.toLowerCase());
  };

  return (
    <div className="grid">
      <form onSubmit={search} className="grid__col12">
        <div className="search-input-container">
          <input
            id="searchBox"
            className="search-input-field"
            type="text"
            placeholder="Enter a Pokémon name or number..."
          />
          <FaSearch className="search-button" onClick={search} />
        </div>
      </form>
    </div>
  );
}

export default Search;
