import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  return (
    <Grid item xs={12} md={4} style={{ padding: 25 }}>
      <Link to={`/${pokemon.id}`} style={{ textDecoration: "none" }}>
        <Card className="pokemon-card">
          <CardContent>
            <img src={pokemon.image} alt="" />
            <h1>{pokemon.name}</h1>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default Pokemon;
