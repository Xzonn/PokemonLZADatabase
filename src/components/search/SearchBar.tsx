import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { useDebounceFn } from "ahooks";
import { Input } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  HyperspaceMissionData,
  ItemData,
  MainMissionData,
  MoveData,
  NAVIGATION_ITEMS as NAVIGATION_ITEMS_UNFILTERED,
  PokemonData,
  SideMissionData,
} from "@/data";
import { AREA_NAMES } from "@/data/areas";
import { EPokemonType, NavigationItem, SearchResult } from "@/types";
import { TRNAME_WITH_ICONS, filterPokemon, getPokemonFullId } from "@/utils";

import { SearchHyperspaceMission } from "./SearchHyperspaceMission";
import { SearchItem } from "./SearchItem";
import { SearchMainMission } from "./SearchMainMission";
import { SearchMove } from "./SearchMove";
import { SearchNavigation } from "./SearchNavigation";
import { SearchPokemon } from "./SearchPokemon";
import { SearchSideMission } from "./SearchSideMission";
import { SearchTrainer } from "./SearchTrainer";
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

const parseKeywordNumber = (keyword: string) => {
  const number = parseInt(keyword, 10);
  if (number < 0) return NaN;
  return number;
};

const searchAll = (keyword: string): SearchResult[] => {
  if (!keyword) {
    return [];
  }
  const keywordParsed = keyword.trim().toLowerCase();
  const keywordNumber = parseKeywordNumber(keyword);

  const results: SearchResult[] = [];

  PokemonData.filter(
    (pokemon) =>
      pokemon.english.toLowerCase().includes(keywordParsed) ||
      pokemon.name.toLowerCase().includes(keywordParsed) ||
      pokemon.formName.toLowerCase().includes(keywordParsed) ||
      pokemon.national === keywordNumber ||
      (keywordNumber <= 232 && pokemon.dex === keywordNumber) ||
      pokemon.dexHyperspace === keywordNumber,
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
        move.english.toLowerCase().includes(keywordParsed) ||
        move.name.toLowerCase().includes(keywordParsed) ||
        move.id === keywordNumber,
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
    EPokemonType.filter((type) => type.includes(keywordParsed))
      .slice(0, 10 - results.length)
      .forEach((type) =>
        results.push({
          type: "type",
          data: type,
        }),
      );
  }

  if (results.length < 10) {
    ItemData.filter((item) => item.name.toLowerCase().includes(keywordParsed) || item.id === keywordNumber)
      .slice(0, 10 - results.length)
      .forEach((item) =>
        results.push({
          type: "item",
          data: item,
        }),
      );
  }

  if (results.length < 10) {
    TRNAME_WITH_ICONS.filter((trainer) => trainer.toLowerCase().includes(keywordParsed))
      .slice(0, 10 - results.length)
      .forEach((trainer) =>
        results.push({
          type: "trainer",
          data: trainer,
        }),
      );
  }

  if (results.length < 10) {
    NAV_ITEMS.filter((item) => item.label.includes(keywordParsed))
      .slice(0, 10 - results.length)
      .forEach((item) =>
        results.push({
          type: "navigation",
          data: item,
        }),
      );
  }

  if (results.length < 10) {
    MainMissionData.filter(
      (mission) => mission.name.toLowerCase().includes(keywordParsed) || mission.index === keywordNumber,
    )
      .slice(0, 10 - results.length)
      .forEach((mission) =>
        results.push({
          type: "main",
          data: mission.index,
        }),
      );
  }

  if (results.length < 10) {
    HyperspaceMissionData.filter(
      (mission) => mission.name.toLowerCase().includes(keywordParsed) || mission.index === keywordNumber,
    )
      .slice(0, 10 - results.length)
      .forEach((mission) =>
        results.push({
          type: "hyperspace",
          data: mission.index,
        }),
      );
  }

  if (results.length < 10) {
    const sideNumber = /^EX(\d)+$/i.exec(keyword) ? -parseInt(keyword.slice(2), 10) : NaN;
    SideMissionData.filter(
      (mission) =>
        mission.name.toLowerCase().includes(keywordParsed) ||
        mission.index === keywordNumber ||
        mission.index === sideNumber,
    )
      .slice(0, 10 - results.length)
      .forEach((mission) =>
        results.push({
          type: "side",
          data: mission.index,
        }),
      );
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
          case "trainer":
            return (
              <SearchTrainer
                key={`trainer-${data}`}
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
          case "main":
            return (
              <SearchMainMission
                key={`main-${data}`}
                result={data}
                onClick={onClick}
              />
            );
          case "hyperspace":
            return (
              <SearchHyperspaceMission
                key={`hyperspace-${data}`}
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
      const result = searchAll(searchKeyword.trim());
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
