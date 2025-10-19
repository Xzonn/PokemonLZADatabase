import React, { useEffect } from "react";
import { PokemonData } from "../data/pokemon";
import PokemonTable from "../components/pokemon/PokemonTable";
import { DefaultTitle } from "../utils";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `宝可梦一览 - ${DefaultTitle}`;
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="text-center px-8 py-8">
        <div className="mb-12">
          <h1>宝可梦一览</h1>
        </div>

        <div>
          <PokemonTable
            data={PokemonData}
            showStats
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
