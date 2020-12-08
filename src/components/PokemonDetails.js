import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";

const PokemonDetails = (props) => {
  const { id } = props.match.params;

  const [pokemon, setPokemon] = useState(undefined);
  const [pokemonStats, setPokemonStats] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
      setPokemonStats(
        res.data.stats.map((stat) => {
          return stat.base_stat;
        })
      );
    };
    getPokemon();

    // eslint-disable-next-line
  }, []);
  return (
    <div className="pokemon-page">
      <div className="pokemon-page-bg"></div>
      <div className="pokemon-image">
        <img
          src={
            pokemon && pokemon.sprites.other["official-artwork"].front_default
          }
          alt="pokemon"
        />
      </div>

      <div className="pokemon-content">
        <h1>{pokemon && pokemon.name}</h1>
        <Bar
          className="bars"
          data={{
            labels: [
              "hp",
              "attack",
              "defense",
              "special-attack",
              "special-defense",
              "speed",
            ],
            datasets: [
              {
                maxBarThickness: 30,
                label: "Stats",
                data: pokemonStats,
                backgroundColor: `rgba(255, 204, 1, 0.6)`,
              },
            ],
          }}
          height={106}
          width={300}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
        <div className="pokemon-details">
          <div className="stat-container">
            <h3>height</h3>
            <p>{pokemon && pokemon.height}</p>
          </div>
          <div className="stat-container">
            <h3>weight</h3>
            <p>{pokemon && pokemon.weight}</p>
          </div>
          <div className="stat-container">
            <h3>type</h3>
            <p>
              {pokemon && pokemon.types[pokemon.types.length - 1].type.name}
            </p>
          </div>
        </div>
      </div>

      <Link className="return-btn" to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">Return to Pokedex</Button>
      </Link>
    </div>
  );
};

export default PokemonDetails;
