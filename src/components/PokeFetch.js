import React, { useState, useEffect } from "react";
import MainView from "./MainView"
function PokeStats() {
  const [pokeStatus, setPokeStatus] = useState({})
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("bulbasaur")
  const [searchPokemon, setSearchPokemon] = useState("https://pokeapi.co/api/v2/pokemon/1/")
  var apiLink = `https://pokeapi.co/api/v2/pokemon-species/${searchQuery}`;

  // Fetch Pokemon by species for multiform cases
  useEffect(() =>
  fetch(apiLink)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Couldn't find "${searchQuery}" on database`);
      }
      return response.json();
    })
    .then((data) => {
      setSearchPokemon(data.varieties[0].pokemon.url)
      setError(null)
    })
    .catch((err) => {
      setError(err.message);
    }),
    [apiLink, searchQuery]
);

  // Fetch pokemon by the searchPokemon state, which returned the default form of the Pokémon
  useEffect(() =>
    fetch(searchPokemon)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPokeStatus(
          {
            name: data.species.name, 
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
      }),
      [apiLink, searchQuery, searchPokemon]
  );

  return (
    <MainView 
    error={error} 
    pokeStatus={pokeStatus} 
    setPokeStatus={setPokeStatus} 
    setSearchQuery={setSearchQuery}/>
  );
}

export default PokeStats;
