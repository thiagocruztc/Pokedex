import React from "react";
import Browse from "../navigation/Browse";
import Types from "./types/Types";

function PokeDisplay(props) {
  return (
    <div>
      <p className="poke-number">{`#${props.pokeStatus.number}`}</p>

      <div className="poke-art">
        <img
          src={props.pokeStatus.artwork}
          alt={props.pokeStatus.name + "-artwork"}
        ></img>
      </div>

      <Browse
        setSearchQuery={props.setSearchQuery}
        pokeStatus={props.pokeStatus}
        setPokeStatus={props.setPokeStatus}
      />

      <Types pokeStatus={props.pokeStatus} />

      <br />

      <div className="poke-sprite">
        <img
          src={props.pokeStatus.front_sprite}
          alt={props.pokeStatus.name + "-frontsprite"}
        ></img>
        {props.pokeStatus.back_sprite !== null ? (
          <img
            src={props.pokeStatus.back_sprite}
            alt={props.pokeStatus.name + "-backsprite"}
          ></img>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default PokeDisplay;
