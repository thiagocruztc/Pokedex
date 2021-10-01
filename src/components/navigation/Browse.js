import React from "react";

function Browse(props) {
  function nextPokemon() {
    props.setSearchQuery(props.pokeStatus.number + 1);
  }
  function prevPokemon() {
    props.setSearchQuery(
      props.pokeStatus.number > 1
        ? props.pokeStatus.number - 1
        : props.pokeStatus.number
    );
  }

  return (
    <div>
      <button onClick={prevPokemon}>Previous</button>

      <button onClick={nextPokemon}>Next</button>
    </div>
  );
}

export default Browse;
