import React from "react";
import Search from "./navigation/Search";
import Match from "./display/Match";
import MatchFail from "./display/MatchFail";

function MainView(props) {
  const typeColors = {
    normal: "#D7D6C1",
    fire: "#F9D2B4",
    water: "#D7DBFF",
    electric: "#FBE89D",
    grass: "#C5E7B1",
    ice: "#B4E4E2",
    fighting: "#F1BDBB",
    poison: "#E3B5E2",
    ground: "#EFDBA9",
    flying: "#AB91F3",
    psychic: "#FDAFC7",
    bug: "#DCEB70",
    rock: "#DED191",
    ghost: "#B5A4CB",
    dragon: "#9A72FD",
    dark: "#B09482",
    steel: "#DBDBE6",
    fairy: "#E6B3CC"
  };

  return (
    <div>
      <Search setSearchQuery={props.setSearchQuery} />

      <div
        className="main-view"
        style={{ "background-color": typeColors[props.pokeStatus.type1] }}
      >
        {/* Ternary betweeen showing a new pokemon or error display */}
        {props.error == null ? (
          <Match
            pokeStatus={props.pokeStatus}
            setPokeStatus={props.setPokeStatus}
            setSearchQuery={props.setSearchQuery}
          />
        ) : (
          <MatchFail error={props.error} />
        )}
      </div>
    </div>
  );
}

export default MainView;
