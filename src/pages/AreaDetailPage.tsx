import { useRequest } from "ahooks";
import { Spin } from "antd";
import { FC, Fragment, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { PokemonMap, PokemonSpawnTable } from "@/components";
import { PokemonDataById } from "@/data";
import { AreaNames } from "@/data/areas";
import { PokemonForm, PokemonSpawn } from "@/types";
import { DEFAULT_TITLE, onUseRequestError } from "@/utils";

import NotFoundPage from "./NotFoundPage";

interface IPageProps {
  name: string;
}

const AreaDetailPageCore: FC<IPageProps> = ({ name }) => {
  useEffect(() => {
    document.title = `${name} - ${DEFAULT_TITLE}`;
  }, [name]);

  const { data: raw = null, loading } = useRequest(
    async () => (await import(`@/data/areas/pokemon/${name}.txt?raw`)).default as string,
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
      const position: PokemonSpawn = {
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

  const [active, setActive] = useState<string | null>(name);
  useEffect(() => {
    setActive(name);
  }, [name]);

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>{name}</h1>
      </div>
      <div className="section">
        <h2>地图</h2>
        <PokemonMap
          active={active}
          setActive={setActive}
        />
      </div>

      <div className="section">
        <h2>野生宝可梦</h2>
        <Spin spinning={loading}>
          <PokemonSpawnTable data={pokemonData || []} />
        </Spin>
      </div>
    </Fragment>
  );
};

const AreaDetailPage: FC = () => {
  const { name } = useParams<{ name: string }>();

  return AreaNames.includes(name || "") ? <AreaDetailPageCore name={name!} /> : <NotFoundPage />;
};

export default AreaDetailPage;
