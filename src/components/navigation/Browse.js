import React from "react";

function Browse(props) {
  function nextPokemon() {
    props.setSearchQuery(
      props.pokeStatus.number < 898
        ? props.pokeStatus.number + 1
        : props.pokeStatus.number
    );
  }
  function prevPokemon() {
    props.setSearchQuery(
      props.pokeStatus.number > 1
        ? props.pokeStatus.number - 1
        : props.pokeStatus.number
    );
  }

  return (
    <div className="grid browse">
      <button className="grid__col2" onClick={prevPokemon}>
        {"<"}
      </button>
      <h2 className="poke-name grid__col8">{props.pokeStatus.name}</h2>
      <button className="grid__col2" onClick={nextPokemon}>
        {">"}
      </button>
    </div>
  );
}

export default Browse;
