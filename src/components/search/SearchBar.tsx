import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useDebounceFn } from "ahooks";
import { Input } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ItemData, MoveData, NAVIGATION_ITEMS as NAVIGATION_ITEMS_UNFILTERED, PokemonData } from "@/data";
import { AREA_NAMES } from "@/data/areas";
import { EPokemonType, NavigationItem, SearchResult } from "@/types";
import { filterPokemon, getPokemonFullId } from "@/utils";

import { SearchItem } from "./SearchItem";
import { SearchMove } from "./SearchMove";
import { SearchNavigation } from "./SearchNavigation";
import { SearchPokemon } from "./SearchPokemon";
import { SearchSideMission } from "./SearchSideMission";
import { SearchType } from "./SearchType";

const LOCATION_PATHS = AREA_NAMES.map(
  (name) =>
    ({
      path: `/area/${name}`,
      label: name,
      icon: name.includes("号野生特区") ? "zone" : "map",
    }) as NavigationItem,
);
const NAV_ITEMS = [
  ...LOCATION_PATHS,
  ...NAVIGATION_ITEMS_UNFILTERED.filter((item) => item && !item.path.slice(1).includes("/")),
];

const searchAll = (keyword: string): SearchResult[] => {
  if (!keyword.trim()) {
    return [];
  }

  const results: SearchResult[] = [];

  PokemonData.filter(
    (pokemon) =>
      pokemon.english.toLowerCase().includes(keyword.toLowerCase()) ||
      pokemon.name.includes(keyword) ||
      pokemon.formName.includes(keyword) ||
      pokemon.national.toString().padStart(3, "0") === keyword,
  )
    .filter(filterPokemon)
    .slice(0, 10)
    .forEach((pokemon) =>
      results.push({
        type: "pokemon",
        data: pokemon,
      }),
    );

  if (results.length < 10) {
    MoveData.filter(
      (move) =>
        move.english.toLowerCase().includes(keyword.toLowerCase()) ||
        move.name.includes(keyword) ||
        move.id.toString().padStart(3, "0") === keyword,
    )
      .slice(0, 10 - results.length)
      .forEach((move) =>
        results.push({
          type: "move",
          data: move,
        }),
      );
  }

  if (results.length < 10) {
    EPokemonType.filter((type) => type.includes(keyword))
      .slice(0, 10 - results.length)
      .forEach((type) =>
        results.push({
          type: "type",
          data: type,
        }),
      );
  }

  if (results.length < 10) {
    ItemData.filter((item) => item.name.includes(keyword))
      .slice(0, 10 - results.length)
      .forEach((item) =>
        results.push({
          type: "item",
          data: item,
        }),
      );
  }

  if (results.length < 10) {
    NAV_ITEMS.filter((item) => item.label.includes(keyword))
      .slice(0, 10 - results.length)
      .forEach((item) =>
        results.push({
          type: "navigation",
          data: item,
        }),
      );
  }

  if (results.length < 10 && !keyword.startsWith("0")) {
    if (keyword.match(/^\d+$/)) {
      const sideNumber = parseInt(keyword, 10);
      if (sideNumber >= 1 && sideNumber <= 119) {
        results.push({
          type: "side",
          data: sideNumber,
        });
      }
    } else if (keyword.match(/^EX(\d)+$/i)) {
      const sideNumber = parseInt(keyword.slice(2), 10);
      if (sideNumber >= 1 && sideNumber <= 2) {
        results.push({
          type: "side",
          data: -sideNumber,
        });
      }
    }
  }

  return results;
};

const renderSearchResult = (result: SearchResult[], onClick: () => void) => {
  const { length } = result || {};

  if (!result || length === 0) {
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
      {result.map((result) => {
        const { type, data } = result;

        switch (type) {
          case "pokemon":
            return (
              <SearchPokemon
                key={`pokemon-${getPokemonFullId(data)}`}
                result={data}
                onClick={onClick}
              />
            );
          case "move":
            return (
              <SearchMove
                key={`move-${data.id}`}
                result={data}
                onClick={onClick}
              />
            );
          case "type":
            return (
              <SearchType
                key={`type-${data}`}
                result={data}
                onClick={onClick}
              />
            );
          case "item":
            return (
              <SearchItem
                key={`item-${data.id}`}
                result={data}
                onClick={onClick}
              />
            );
          case "navigation":
            return (
              <SearchNavigation
                key={`navigation-${data.label}`}
                result={data}
                onClick={onClick}
              />
            );
          case "side":
            return (
              <SearchSideMission
                key={`side-${data}`}
                result={data}
                onClick={onClick}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

interface IProps {
  onClick?: () => void;
}

export const SearchBar: FC<IProps> = ({ onClick }) => {
  const location = useLocation();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const { run: debounceSearch } = useDebounceFn(
    () => {
      const result = searchAll(searchKeyword);
      setSearchResult(result);
      setShowSearchResults(true);
    },
    { wait: 500 },
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

  useEffect(handleClearSearch, [location.pathname]);

  return (
    <div className="relative">
      <Input
        placeholder="搜索"
        value={searchKeyword}
        onChange={handleSearch}
        prefix={<SearchOutlined className="text-gray-400" />}
        suffix={
          searchKeyword ? (
            <CloseOutlined
              className="text-gray-400 cursor-pointer"
              onClick={handleClearSearch}
            />
          ) : null
        }
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
      />

      {/* 搜索结果下拉框 */}
      {showSearchResults ? (
        <div className="absolute z-[500] mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
          {renderSearchResult(searchResult, () => {
            handleClearSearch();
            onClick?.();
          })}
        </div>
      ) : null}
    </div>
  );
};
