import React, { useEffect } from "react";

import { PokemonList } from "@/components";
import { DefaultTitle } from "@/utils";

const PokemonListPage: React.FC = () => {
  useEffect(() => {
    document.title = `宝可梦一览 - ${DefaultTitle}`;
  }, []);

  return <PokemonList />;
};

export default PokemonListPage;
