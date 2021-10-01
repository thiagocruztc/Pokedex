import React from "react";

function Search(props) {
  const search = (event) => {
    event.preventDefault();
    /* Try to substitute this \/ for React Refs as Dinesh said 
    https://reactjs.org/docs/refs-and-the-dom.html
    https://reactjs.org/docs/forwarding-refs.html*/
    const searchString = document.getElementById("searchBox").value;
    props.setSearchQuery(searchString);
  };

  return (
    <form onSubmit={search}>
      <input id="searchBox" type="text" />
      <br />
      <button>Search</button>
    </form>
  );
}

export default Search;
