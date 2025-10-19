import React from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { PokemonDataByName } from "../data/pokemon";
import PokemonDetail from "../components/pokemon/PokemonDetail";

const PokemonDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const pokemon = PokemonDataByName[name || ""];

  return pokemon ? <PokemonDetail data={pokemon} /> : <NotFoundPage />;
};

export default PokemonDetailPage;
