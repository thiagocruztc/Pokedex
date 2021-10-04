import React, { useState, useEffect } from "react";
import Search from "./navigation/Search";
import Match from "./Match";
import MatchFail from "./MatchFail"

function PokeStats() {
  const [pokeStatus, setPokeStatus] = useState({})
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("bulbasaur")
  var apiLink = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`;

  useEffect(() =>
    fetch(apiLink)
      .then((response) => {
        if (!response.ok) {
          throw Error(`Couldn't find "${searchQuery}" on database`);
        }
        return response.json();
      })
      .then((data) => {
        setPokeStatus(
          {
            name: data.name, 
            number: data.id,
            type1: data.types[0].type.name,
            type2: (data.types.length > 1) ? data.types[1].type.name : '',
            artwork: data.sprites.other.["official-artwork"].front_default,
            front_sprite: data.sprites.front_default,
            back_sprite: data.sprites.back_default,
            height: data.height,
          }
        );
        setError(null)
      })
      .catch((err) => {
        setError(err.message);
      }),
      [apiLink, searchQuery]
  );

  return (
    <div>
      {/* Ternary betweeen showing a new pokemon or error display */}
      {error == null ? 
        (
          <Match 
            pokeStatus={pokeStatus} 
            setPokeStatus={setPokeStatus} 
            setSearchQuery={setSearchQuery}
          />
        ) : 
        (
          <MatchFail error={error}/>
        )
      }
      <br />

      <Search 
      setSearchQuery={setSearchQuery} 
      />
      
    </div>
  );
}

export default PokeStats;
