import React, { createContext, useReducer } from "react";
import { pokeReducer } from "./PokeReducer";
import axios from "axios";

const initialState = {
  pokeList: [],
  loading: false,
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [pokeState, dispatch] = useReducer(pokeReducer, initialState);

  const getAllPokes = async () => {
    let newPokemonData = [];
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=300"
      );
      res.data.results.forEach((pokemon, index) => {
        newPokemonData[index] = {
          id: index + 1,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        };
      });
      dispatch({
        type: "GET_ALL_POKEMONS",
        payload: newPokemonData,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        pokeList: pokeState.pokeList,
        getAllPokes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
