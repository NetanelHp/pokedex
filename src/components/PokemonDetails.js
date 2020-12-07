import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = (props) => {
  const { id } = props.match.params;

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
    };
    getPokemon();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>{pokemon && console.log(pokemon)}</h1>
    </div>
  );
};

export default PokemonDetails;
