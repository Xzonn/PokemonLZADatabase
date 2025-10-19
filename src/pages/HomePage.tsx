// src/pages/HomePage.tsx

import React, { useEffect } from "react";
import { PokemonData } from "../data/pokemon";
import PokemonTable from "../components/pokemon/PokemonTable";
import { DefaultTitle } from "../utils";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `密阿雷图鉴 - ${DefaultTitle}`;
  }, []);

  return (
    <div className="text-center">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">密阿雷图鉴</h2>
      </div>

      <div>
        <PokemonTable
          data={PokemonData}
          showStats
        />
      </div>
    </div>
  );
};

export default HomePage;
