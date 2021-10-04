import React from "react";

function Types(props) {
  return (
    <div>
      {/* Type 1 */}
      <img
        src={`./assets/${props.pokeStatus.type1}.svg`}
        alt={`${props.pokeStatus.type1}-type-icon`}
        className="pokemon-type"
      ></img>

      {/* If there's a Type2, apply it. If not, return null */}
      {props.pokeStatus.type2 !== "" ? (
        <img
          src={`./assets/${props.pokeStatus.type2}.svg`}
          alt={`${props.pokeStatus.type2}-type-icon`}
          className="pokemon-type"
        ></img>
      ) : (
        ""
      )}
    </div>
  );
}

export default Types;
