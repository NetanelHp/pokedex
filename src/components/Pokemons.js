import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Grid from "@material-ui/core/Grid";
import Pokemon from "./Pokemon";
import TextField from "@material-ui/core/TextField";

const Pokemons = () => {
  const { pokeList } = useContext(GlobalContext);
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="pokemons-grid">
      <div className="search-bar" style={{ marginBottom: 30 }}>
        <form noValidate autoComplete="off">
          <TextField
            value={input}
            onChange={onInputChange}
            id="standard-basic"
            label="Search pokemon"
            size="small"
            variant="standard"
            color="primary"
          />
        </form>
      </div>
      <Grid container>
        {pokeList &&
          pokeList.map(
            (pokemon) =>
              pokemon.name.includes(input) && (
                <Pokemon pokemon={pokemon} key={pokemon.id} />
              )
          )}
      </Grid>
    </div>
  );
};

export default Pokemons;
