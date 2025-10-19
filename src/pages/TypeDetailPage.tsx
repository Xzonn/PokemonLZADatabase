import React from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import TypeDetail from "../components/type/TypeDetail";
import { EPokemonType, PokemonType } from "../types";

const TypeDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return EPokemonType.includes((name || "") as PokemonType) ? (
    <TypeDetail name={name as PokemonType} />
  ) : (
    <NotFoundPage />
  );
};

export default TypeDetailPage;
