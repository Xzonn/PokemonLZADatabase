import { useRequest } from "ahooks";
import { Spin } from "antd";
import { FC, Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import NotFoundPage from "./NotFoundPage";

import { PokemonMap, PokemonSpawnZoneTable } from "@/components";
import { PokemonDataById } from "@/data";
import { PokemonForm, PokemonSpawnZone } from "@/types";
import { DEFAULT_TITLE, halfToFull, onUseRequestError } from "@/utils";

interface IPageProps {
  id: number;
}

const WildZoneDetailPageCore: FC<IPageProps> = ({ id }) => {
  const title = `${halfToFull(id.toString())}号野生特区`;

  useEffect(() => {
    document.title = `${title} - ${DEFAULT_TITLE}`;
  }, [title]);

  const { data: raw = null, loading } = useRequest(
    async () => (await import(`@/data/zone/pokemon-${id}.txt?raw`)).default as string,
    {
      onError: onUseRequestError,
    },
  );

  const pokemonData = useMemo(() => {
    if (!raw) return null;
    const lines = raw.trim().split("\n");
    const header = lines[0].split("\t");

    return lines.slice(1).map((line) => {
      const parts = line.split("\t");
      const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
      const position: PokemonSpawnZone = {
        index: parseInt(dict["编号"], 10),
        form: dict["形态"] as PokemonForm,
        pokemon: PokemonDataById[dict["形态"] as PokemonForm],
        levelMin: parseInt(dict["最低等级"], 10),
        levelMax: parseInt(dict["最高等级"], 10),
        alphaRate: parseInt(dict["头目概率"], 10),
        alphaLevelMin: parseInt(dict["头目最低等级"], 10),
        alphaLevelMax: parseInt(dict["头目最高等级"], 10),
      };
      return position;
    });
  }, [raw]);

  const [active, setActive] = useState<number | null>(id);
  useEffect(() => {
    setActive(id);
  }, [id]);

  return (
    <Fragment key="wild-zone-list">
      <div className="block">
        <h1>{title}</h1>
      </div>
      <div className="block">
        <h2>地图</h2>
        <PokemonMap
          active={active}
          setActive={setActive}
        />
      </div>

      <div className="block">
        <h2>野生宝可梦</h2>
        <Spin spinning={loading}>
          <PokemonSpawnZoneTable data={pokemonData || []} />
        </Spin>
      </div>
    </Fragment>
  );
};

const WildZoneDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const zoneId = parseInt(id || "", 10);

  return zoneId >= 1 && zoneId <= 20 ? <WildZoneDetailPageCore id={zoneId} /> : <NotFoundPage />;
};

export default WildZoneDetailPage;
