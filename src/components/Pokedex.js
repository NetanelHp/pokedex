import React from "react";
import Header from "./Header";
import Pokemons from "./Pokemons";

const Pokedex = () => {
  return (
    <div className="pokedex">
      <div className="bg"></div>
      <Header />
      <Pokemons />
    </div>
  );
};

export default Pokedex;
