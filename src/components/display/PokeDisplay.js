import React from "react";
import Types from "./types/Types";

function PokeDisplay(props) {
  return (
    <div>
      <h2>Name: {props.pokeStatus.name}</h2>
      <h2>Number: {props.pokeStatus.number}</h2>
      <h2>
        Type: {props.pokeStatus.type1} {props.pokeStatus.type2}
      </h2>
      <Types pokeType1={props.pokeType1} pokeType={props.pokeType2} />
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
      <img
        src={props.pokeStatus.back_sprite}
        alt={props.pokeStatus.name + "-backsprite"}
      ></img>
    </div>
  );
}

export default PokeDisplay;
