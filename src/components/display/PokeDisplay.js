import React from "react";
import Types from "./types/Types";

function PokeDisplay(props) {
  return (
    <div>
      <h2>Name: {props.pokeStatus.name}</h2>
      <h2>Number: {`#${props.pokeStatus.number}`}</h2>
      <Types pokeStatus={props.pokeStatus} />
      <h2>Height: {props.pokeStatus.height}</h2>
      <img
        src={props.pokeStatus.artwork}
        alt={props.pokeStatus.name + "-artwork"}
      ></img>
      <br />
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
  );
}

export default PokeDisplay;
