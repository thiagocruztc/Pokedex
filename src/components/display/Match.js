import React from "react";
import PokeDisplay from "./PokeDisplay";

function Match(props) {
  return (
    <div>
      <PokeDisplay
        pokeStatus={props.pokeStatus}
        setSearchQuery={props.setSearchQuery}
      />
    </div>
  );
}

export default Match;
