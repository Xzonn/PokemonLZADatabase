import { useRequest } from "ahooks";
import { Button, Spin, Switch } from "antd";
import { divIcon } from "leaflet";
import React, { FC, Fragment, useEffect, useMemo, useRef, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { Map as LumioseMap, PokemonIcon, PokemonSpawnTable } from "@/components";
import { PokemonDataById } from "@/data";
import { Pokemon, PokemonForm, PokemonSpawnDetail, SpawnPoint } from "@/types";
import { DEFAULT_TITLE, Link, MAP_CENTER, getCoord, getPokemonFullId, onUseRequestError } from "@/utils";

interface IMapLayerProps {
  data: SpawnPoint[];
  onClick?: (index: number) => void;
}
const MapLayer: FC<IMapLayerProps> = ({ data, onClick }) => {
  const map = useMap();

  if (data?.length === 1) {
    map.setView(getCoord([data[0].x, data[0].y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data.map((item) => (
    <Marker
      key={item.index}
      position={getCoord([item.x, item.y])}
      icon={divIcon({
        className: `icon icon-${item.isAlpha ? "alpha-black" : "bag-精灵球"} text-[32px]`,
        iconSize: [32, 32],
      })}
    >
      <Popup>
        <div className="text-center">#{item.index}</div>
        <Button
          type="link"
          onClick={() => onClick?.(item.index)}
        >
          查看详情
        </Button>
      </Popup>
    </Marker>
  ));
};

interface IFilter {
  point?: number;
  alphaOnly?: boolean;
  pokemonForm?: PokemonForm;
}

interface IPokmonFilterIconProps {
  className?: string;
  pokemon: Pokemon;
  onClick: () => void;
}
const PokemonFilterIcon: FC<IPokmonFilterIconProps> = ({ pokemon: p, onClick, className }) => (
  <Button
    onClick={onClick}
    type="link"
    key={`${p.id}-${p.form}`}
    className="flex flex-col items-center justify-start gap-0 w-[72px] h-[96px]"
  >
    <PokemonIcon
      className={className}
      pokemon={p}
      size={48}
    />
    <div>{p.name}</div>
    {p.formName ? <div className="text-gray-400 text-xs">{p.formName}</div> : null}
  </Button>
);

const AreaListPage: React.FC = () => {
  useEffect(() => {
    document.title = `宝可梦分布 - ${DEFAULT_TITLE}`;
  }, []);

  const [filter, setFilter] = useState<IFilter>({});

  const mapRef = useRef<HTMLHeadingElement | null>(null);
  const pokemonRef = useRef<HTMLHeadingElement | null>(null);

  const { data: raw = null, loading } = useRequest(async () => (await import("@/data/areas/spawn.txt?raw")).default, {
    refreshDeps: [],
    onError: onUseRequestError,
  });

  const { spawnData = [], allPokemon = [] } = useMemo(() => {
    if (!raw) return {};
    const lines = raw.trim().split("\n");
    const header = lines[0].split("\t");

    const spawnData = lines.slice(1).map((line) => {
      const parts = line.split("\t");
      const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
      const detail: SpawnPoint = {
        index: parseInt(dict["编号"], 10),
        x: parseInt(dict.X, 10),
        y: parseInt(dict.Y, 10),
        z: parseInt(dict.Z, 10),
        isAlpha: dict["头目"] === "1",
        respawnTime: parseInt(dict["重生时间"], 10),
        radiusMin: parseInt(dict["最小半径"], 10),
        radiusMax: parseInt(dict["最大半径"], 10),
        pokemonRaw: dict["宝可梦列表"],
      };
      return detail;
    });
    const allPokemon = [
      ...new Set(spawnData.flatMap((item) => item.pokemonRaw.split("|").map((p) => p.split("+")[0] as PokemonForm))),
    ].sort();

    return { spawnData, allPokemon };
  }, [raw]);

  const {
    filteredSpawnData = [],
    pokemonLists = [],
    filtered = false,
  } = useMemo(() => {
    const { point, alphaOnly, pokemonForm } = filter;

    const pointFiltered = point !== undefined ? spawnData.filter((item) => item.index === point) : spawnData;
    const alphaFiltered = alphaOnly ? pointFiltered.filter((item) => item.isAlpha) : pointFiltered;
    const pokemonFiltered =
      pokemonForm !== undefined
        ? alphaFiltered.filter((item) => item.pokemonRaw.split("|").some((p) => p.startsWith(pokemonForm)))
        : alphaFiltered;

    const pokemonLists = pokemonFiltered.map((line) => ({
      index: line.index,
      list: line.pokemonRaw.split("|").map((p, index) => {
        const [
          form,
          levelMinStr,
          levelMaxStr,
          alphaRateStr,
          alphaLevelMinStr,
          alphaLevelMaxStr,
          rarityStr,
          time = "",
          weather = "",
        ] = p.split("+");

        const item: PokemonSpawnDetail = {
          index,
          form: form as PokemonForm,
          pokemon: PokemonDataById[form as PokemonForm],
          levelMin: parseInt(levelMinStr, 10),
          levelMax: parseInt(levelMaxStr, 10),
          alphaRate: parseInt(alphaRateStr || "0", 10),
          alphaLevelMin: parseInt(alphaLevelMinStr || "0", 10),
          alphaLevelMax: parseInt(alphaLevelMaxStr || "0", 10),
          rarity: parseFloat(rarityStr || "0"),
          time: time as PokemonSpawnDetail["time"],
          weather: weather as PokemonSpawnDetail["weather"],
        };
        return item;
      }),
    }));

    return {
      filteredSpawnData: pokemonFiltered,
      pokemonLists,
      filtered: !(point === null && !alphaOnly && pokemonForm === null),
    };
  }, [spawnData, filter]);

  const pokemonIcons = useMemo(
    () =>
      allPokemon.map((p) => (
        <PokemonFilterIcon
          key={p}
          pokemon={PokemonDataById[p]}
          className={filter.pokemonForm === p ? "bg-blue-100 rounded-md" : ""}
          onClick={() => {
            setFilter((prev) => ({ ...prev, pokemonForm: p, point: undefined }));
            pokemonRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      )),
    [allPokemon, filter.pokemonForm],
  );

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>宝可梦分布</h1>
      </div>

      <div className="section">
        <h2 ref={mapRef}>地图</h2>
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setFilter({})}
            disabled={loading || !filtered}
          >
            重置筛选
          </Button>
        </div>
        <LumioseMap loading={loading}>
          {filteredSpawnData ? (
            <MapLayer
              data={filteredSpawnData}
              onClick={(index) => {
                setFilter({ point: index });
                pokemonRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          ) : null}
        </LumioseMap>
        <div className="map-note">
          地点坐标参考自：
          <Link to="https://www.serebii.net/pokearth/lumiosecity/">Serebii.net</Link>
        </div>
      </div>

      <div className="section">
        <h2>筛选条件</h2>
        <div className="flex items-center justify-center gap-2 text-[14px] mb-2">
          <Switch
            size="small"
            checked={filter.alphaOnly}
            onChange={(checked) => setFilter((prev) => ({ ...prev, alphaOnly: checked, point: undefined }))}
          />
          <div>仅显示头目宝可梦刷新点</div>
        </div>
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setFilter((prev) => ({ ...prev, pokemonForm: undefined }))}
            disabled={filter.pokemonForm === undefined}
          >
            取消筛选宝可梦
          </Button>
        </div>
        <div className="grid text-md grid-cols-[repeat(auto-fit,_minmax(72px,_1fr))]">{pokemonIcons}</div>
      </div>

      <div className="section">
        <h2 ref={pokemonRef}>宝可梦列表</h2>
        {!filtered || pokemonLists.length > 25 ? (
          <>
            <div className="map-note">数据过多，请选择筛选条件。</div>
            <div className="flex justify-center mt-2">
              <Button onClick={() => mapRef.current?.scrollIntoView({ behavior: "smooth" })}>跳转到地图</Button>
            </div>
          </>
        ) : (
          pokemonLists.map((pokemonList) => (
            <Fragment key={pokemonList.index}>
              <h3>
                <span>#{pokemonList.index}</span>{" "}
                {filter.point === undefined ? (
                  <Button
                    className="ml-2"
                    onClick={() => setFilter({ point: pokemonList.index })}
                  >
                    查看此地点所有宝可梦
                  </Button>
                ) : null}
                <Button
                  className="ml-2"
                  onClick={() => mapRef.current?.scrollIntoView({ behavior: "smooth" })}
                >
                  跳转到地图
                </Button>
              </h3>
              <Spin spinning={loading}>
                <PokemonSpawnTable
                  headers={["宝可梦", "图鉴", "属性", "通常等级", "头目概率", "头目等级", "稀有度", "时间", "天气"]}
                  data={
                    filter.pokemonForm !== undefined
                      ? pokemonList.list.filter((p) => getPokemonFullId(p.pokemon) === filter.pokemonForm)
                      : pokemonList.list
                  }
                />
              </Spin>
            </Fragment>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default AreaListPage;
