import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "./context/GlobalState";

import Pokedex from "./components/Pokedex";
import PokemonDetails from "./components/PokemonDetails";

const App = () => {
  const { getAllPokes } = useContext(GlobalContext);

  useEffect(() => {
    getAllPokes();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Pokedex} />
        <Route path="/:id" component={PokemonDetails} />
      </div>
    </Router>
  );
};

export default App;
