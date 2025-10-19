import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useDebounceFn } from "ahooks";
import { Input } from "antd";
import React, { useState } from "react";

import SearchMove from "./SearchMove";
import SearchPokemon from "./SearchPokemon";

import { MoveData } from "@/data/move";
import { PokemonData } from "@/data/pokemon";
import { SearchResult } from "@/types";
import { getPokemonFullId } from "@/utils";

const searchAll = (keyword: string): SearchResult => {
  if (!keyword.trim()) {
    return {
      isEmpty: true,
      pokemon: [],
      moves: [],
    };
  }

  const pokemonResults = PokemonData.filter(
    (pokemon) => pokemon.english.toLowerCase().includes(keyword.toLowerCase()) || pokemon.name.includes(keyword),
  ).slice(0, 10);

  const moveResults =
    pokemonResults.length < 10
      ? MoveData.filter(
          (move) => move.english.toLowerCase().includes(keyword.toLowerCase()) || move.name.includes(keyword),
        ).slice(0, 10 - pokemonResults.length)
      : [];

  return {
    isEmpty: pokemonResults.length === 0 && moveResults.length === 0,
    pokemon: pokemonResults,
    moves: moveResults,
  };
};

const renderSearchResult = (result: SearchResult | undefined, onClick: () => void) => {
  const { isEmpty = true } = result || {};

  if (!result || isEmpty) {
    return (
      <div
        key="empty"
        className="px-4 py-3 text-gray-500"
      >
        没有找到相关结果
      </div>
    );
  }

  return (
    <div key="results">
      {result.pokemon.map((pokemon) => (
        <SearchPokemon
          key={`pokemon-${getPokemonFullId(pokemon)}`}
          result={pokemon}
          onClick={onClick}
        />
      ))}
      {result.moves.map((move) => (
        <SearchMove
          key={`move-${move.id}`}
          result={move}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

const SearchBar: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const [showSearchResults, setShowSearchResults] = useState(false);

  const { run: debounceSearch } = useDebounceFn(
    () => {
      const result = searchAll(searchKeyword);
      setSearchResult(result);
      setShowSearchResults(true);
    },
    { wait: 300 },
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    if (keyword.length > 0) {
      debounceSearch();
    } else {
      setShowSearchResults(false);
    }
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
    setShowSearchResults(false);
  };

  return (
    <div className="relative">
      <Input
        placeholder="搜索"
        value={searchKeyword}
        onChange={handleSearch}
        prefix={<SearchOutlined className="text-gray-400" />}
        suffix={
          searchKeyword && (
            <CloseOutlined
              className="text-gray-400 cursor-pointer"
              onClick={handleClearSearch}
            />
          )
        }
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
      />

      {/* 搜索结果下拉框 */}
      {showSearchResults && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {renderSearchResult(searchResult, handleClearSearch)}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
