import React from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { PokemonDetail } from "@/components";
import { PokemonDataByName } from "@/data/pokemon";

const PokemonDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const pokemon = PokemonDataByName[name || ""];

  return pokemon ? <PokemonDetail data={pokemon} /> : <NotFoundPage />;
};

export default PokemonDetailPage;
