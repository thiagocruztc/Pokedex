import React from "react";
import PokeDisplay from "./display/PokeDisplay";
import Browse from "./navigation/Browse";

function Match(props) {
  return (
    <div>
      <PokeDisplay pokeStatus={props.pokeStatus} />

      <Browse
        setSearchQuery={props.setSearchQuery}
        pokeStatus={props.pokeStatus}
        setPokeStatus={props.setPokeStatus}
      />
    </div>
  );
}

export default Match;
