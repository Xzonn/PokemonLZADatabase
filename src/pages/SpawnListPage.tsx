import { useRequest } from "ahooks";
import { Button, Spin } from "antd";
import { divIcon } from "leaflet";
import React, { FC, Fragment, useEffect, useMemo } from "react";
import { Marker, useMap } from "react-leaflet";

import { Map, PokemonSpawnTable } from "@/components";
import { PokemonDataById } from "@/data";
import { PokemonForm, PokemonSpawnDetail, SpawnPoint } from "@/types";
import { DEFAULT_TITLE, Link, MAP_CENTER, getCoord, onUseRequestError } from "@/utils";

interface IMapLayerProps {
  data: SpawnPoint[];
  onClick?: (index: number) => void;
}
const MapLayer: FC<IMapLayerProps> = ({ data, onClick }) => {
  const map = useMap();

  if (data?.length === 1 && data[0].x !== null) {
    const item = data[0];
    map.setView(getCoord([item.x, item.y]), 2);
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
      eventHandlers={{
        click: () => onClick?.(item.index),
      }}
    />
  ));
};

const AreaListPage: React.FC = () => {
  useEffect(() => {
    document.title = `宝可梦分布 - ${DEFAULT_TITLE}`;
  }, []);

  const { data: raw = null, loading } = useRequest(async () => (await import("@/data/areas/spawn.txt?raw")).default, {
    refreshDeps: [],
    onError: onUseRequestError,
  });

  const spawnData = useMemo(() => {
    if (!raw) return null;
    const lines = raw.trim().split("\n");
    const header = lines[0].split("\t");

    return lines.slice(1).map((line) => {
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
  }, [raw]);

  const [active, setActive] = React.useState<number | null>(null);
  const activeData = spawnData?.find((item) => item.index === active);
  const pokemonList = useMemo(() => {
    if (!activeData) return [];
    return activeData.pokemonRaw.split("|").map((p, index) => {
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
    });
  }, [activeData]);

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>宝可梦分布</h1>
      </div>

      <div className="section">
        <h2>地图</h2>
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setActive(null)}
            disabled={loading || active === null}
          >
            重置筛选
          </Button>
        </div>
        <Map loading={loading}>
          {spawnData ? (
            <MapLayer
              data={active !== null ? [activeData!] : spawnData}
              onClick={(index) => setActive(index)}
            />
          ) : null}
        </Map>
        <div className="map-note">
          地点坐标参考自：
          <Link to="https://www.serebii.net/pokearth/lumiosecity/">Serebii.net</Link>
        </div>
      </div>

      <div className="section">
        <h2>宝可梦列表</h2>
        {active === null ? (
          <div className="map-note">请在地图上选择坐标点。按照宝可梦筛选的功能会在后续更新中添加。</div>
        ) : (
          <Spin spinning={loading}>
            <PokemonSpawnTable
              headers={["宝可梦", "图鉴", "属性", "通常等级", "头目概率", "头目等级", "稀有度", "时间", "天气"]}
              data={pokemonList || []}
            />
          </Spin>
        )}
      </div>
    </Fragment>
  );
};

export default AreaListPage;
