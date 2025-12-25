import { useLocalStorageState } from "ahooks";
import { Button, Spin, Switch } from "antd";
import { divIcon } from "leaflet";
import { FC, Fragment, useCallback, useMemo, useRef } from "react";
import { Marker, Popup } from "react-leaflet";

import { PokemonFilterIcon, PokemonIcon, PokemonSpawnTable, useGameMap } from "@/components";
import { PokemonDataById } from "@/data";
import { ISpawnPoint, PokemonForm } from "@/types";
import { getCoord, useImport, useLoadingAnchor, useViewBounds } from "@/utils";

interface IMapLayerProps {
  data: ISpawnPoint[];
  onClick?: (index: number) => void;
  imageSize?: number;
}
const MapLayer: FC<IMapLayerProps> = ({ data, onClick, imageSize = 4096 }) => {
  useViewBounds(data, imageSize);

  return data.map((item) => (
    <Marker
      key={item.index}
      position={getCoord([item.x, item.y], imageSize)}
      icon={divIcon({
        className: `icon icon-${item.isAlpha ? "alpha-black" : "bag-精灵球"} text-[32px]`,
        iconSize: [32, 32],
      })}
    >
      <Popup>
        <div className="text-center">#{item.index}</div>
        <div className="flex-container min-w-[240px]">
          {[...new Set(item.pokemon.map((p) => p.form))].slice(0, 18).map((form) => (
            <PokemonIcon
              key={form}
              size={32}
              pokemon={PokemonDataById[form]}
            />
          ))}
        </div>
        <Button
          className="mx-auto block"
          type="link"
          onClick={() => onClick?.(item.index)}
        >
          查看详情
        </Button>
      </Popup>
    </Marker>
  ));
};

interface IProps {
  location?: string;
}

interface IFilter {
  point?: number;
  alphaOnly?: boolean;
  pokemonForm?: PokemonForm;
}

export const AreaPokemonSpawn: FC<IProps> = ({ location }) => {
  const { MapComponent, imageSize } = useGameMap(location);

  const [filter, setFilter] = useLocalStorageState<IFilter>("za-spawn-filter", {
    defaultValue: {},
  });

  const pokemonRef = useRef<HTMLHeadingElement | null>(null);

  const [data, loading] = useImport(async () => await import("@/data/areas/spawn"));
  const { filteredData, allPokemon } = useMemo(() => {
    if (!data) {
      return { filteredData: [], allPokemon: [] };
    }
    const spawnData =
      (() => {
        switch (location) {
          case "弗拉达利研究所":
            return data.SpawnDataLysandreLabs;
          case "下水道 1":
            return data.SpawnDataSewersCh5;
          case "下水道 2":
            return data.SpawnDataSewersCh6;
          default:
            return data.SpawnDataLumiose;
        }
      })() || [];
    const filteredData: ISpawnPoint[] = [];
    const allPokemonSet = new Set<PokemonForm>();
    spawnData.forEach((item) => {
      if (location && item.location !== location) {
        return;
      }
      filteredData.push(item);
      item.pokemon.forEach((p) => {
        allPokemonSet.add(p.form);
      });
    });
    const allPokemon = Array.from(allPokemonSet).sort();

    return { filteredData, allPokemon };
  }, [data, location]);

  const {
    filteredSpawnData = [],
    pokemonLists = [],
    filtered = false,
  } = useMemo(() => {
    const { point, alphaOnly, pokemonForm } = filter;

    const pointFiltered = point !== undefined ? filteredData.filter((item) => item.index === point) : filteredData;
    const alphaFiltered = alphaOnly ? pointFiltered.filter((item) => item.isAlpha) : pointFiltered;
    const pokemonFiltered =
      pokemonForm !== undefined
        ? alphaFiltered.filter((item) => item.pokemon.some((p) => p.form === pokemonForm))
        : alphaFiltered;

    const pokemonLists = pokemonFiltered.map((line) => ({
      index: line.index,
      location: line.location,
      list: line.pokemon,
    }));

    return {
      filteredSpawnData: pokemonFiltered,
      pokemonLists,
      filtered: !(point === null && !alphaOnly && pokemonForm === null),
    };
  }, [filteredData, filter]);

  const pokemonIcons = useMemo(() => {
    if (!allPokemon.length) {
      return null;
    }
    if (!allPokemon.includes(filter.pokemonForm!)) {
      setFilter({ pokemonForm: undefined });
    }
    return allPokemon.map((p) => (
      <PokemonFilterIcon
        key={p}
        pokemon={PokemonDataById[p]}
        className={filter.pokemonForm === p ? "bg-blue-100 rounded-md" : ""}
        onClick={() => {
          setFilter((prev) => ({ ...prev, pokemonForm: p, point: undefined }));
        }}
      />
    ));
  }, [allPokemon, filter.pokemonForm, setFilter]);

  const onPointClick = useCallback(
    (index: number) => {
      const h3 = document.querySelector<HTMLHeadingElement>(`#spawn-point-${index}`);
      if (!h3) {
        setFilter({ point: index });
        pokemonRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        h3.scrollIntoView({ behavior: "smooth" });
      }
    },
    [setFilter],
  );

  useLoadingAnchor([loading]);

  return (
    <Fragment key="area-pokemon-spawn">
      <div className="section">
        <h2>筛选宝可梦</h2>
        <div className="flex items-center justify-center gap-2 text-[14px] mb-2">
          <Switch
            size="small"
            checked={filter.alphaOnly}
            onChange={(checked) => setFilter((prev) => ({ ...prev, alphaOnly: checked, point: undefined }))}
          />
          <div>仅显示头目宝可梦刷新点</div>
        </div>
        <div className="flex justify-center mb-2 gap-2">
          <Button
            onClick={() => setFilter((prev) => ({ ...prev, pokemonForm: undefined }))}
            disabled={filter.pokemonForm === undefined}
          >
            取消筛选宝可梦
          </Button>
          <Button
            onClick={() => setFilter({})}
            disabled={loading || !filtered}
          >
            重置筛选
          </Button>
        </div>
        <div className="grid text-md grid-cols-[repeat(auto-fit,_72px)] justify-center">{pokemonIcons}</div>
      </div>

      <div className="section">
        <h2>宝可梦分布</h2>
        <MapComponent
          filter={{}}
          filterComponent={
            <div className="flex justify-center mb-2 gap-2">
              <Button
                onClick={() => setFilter({})}
                disabled={loading || !filtered}
              >
                重置筛选
              </Button>
            </div>
          }
          showReset={false}
          loading={loading}
        >
          {filteredSpawnData ? (
            <MapLayer
              imageSize={imageSize}
              data={filteredSpawnData}
              onClick={onPointClick}
            />
          ) : null}
        </MapComponent>
      </div>

      <div className="section">
        <h2 ref={pokemonRef}>宝可梦列表</h2>
        {!location && pokemonLists.length > 25 ? (
          <>
            <div className="map-note">数据过多，请选择筛选条件。</div>
          </>
        ) : (
          pokemonLists.map((pokemonList) => (
            <Fragment key={pokemonList.index}>
              <h3 id={`spawn-point-${pokemonList.index}`}>
                <span>#{pokemonList.index}</span>
              </h3>
              <Spin spinning={loading}>
                <PokemonSpawnTable data={pokemonList.list} />
              </Spin>
            </Fragment>
          ))
        )}
      </div>
    </Fragment>
  );
};
