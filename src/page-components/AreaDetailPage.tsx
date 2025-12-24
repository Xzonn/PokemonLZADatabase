"use client";

import { divIcon } from "leaflet";
import { FC, Fragment, useEffect, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import { useParams } from "@/utils/ParamsProvider";

import { AreaPokemonSpawn, ItemCell, ItemRewardsTable, useGameMap } from "@/components";
import { ItemDataByName } from "@/data";
import { AREA_NAMES } from "@/data/areas";
import { IItemPoint } from "@/types";
import { DEFAULT_TITLE, getCoord, useImport, useViewBounds } from "@/utils";

import NotFoundPage from "./NotFoundPage";

interface IMapLayerProps {
  data: IItemPoint[];
  imageSize?: number;
}
const MapLayer: FC<IMapLayerProps> = ({ data, imageSize = 4096 }) => {
  useViewBounds(data, imageSize);

  return data.map((item) => (
    <Marker
      key={item.index}
      position={getCoord([item.x, item.y], imageSize)}
      icon={divIcon({
        className: `icon icon-${item.icon} text-[32px]`,
        iconSize: [32, 32],
      })}
    >
      <Popup>
        <ItemCell item={ItemDataByName[item.item]} />
      </Popup>
    </Marker>
  ));
};

interface IPageProps {
  name: string;
}

const AreaDetailPageCore: FC<IPageProps> = ({ name }) => {
  useEffect(() => {
    document.title = `${name} - ${DEFAULT_TITLE}`;
  }, [name]);

  const { MapComponent, imageSize } = useGameMap(name);

  const [data, loading] = useImport(async () => await import("@/data/areas/item"));
  const { filteredData, groupedData } = useMemo(() => {
    if (!data) {
      return { filteredData: [], groupedData: {} };
    }
    const itemData =
      (() => {
        switch (name) {
          case "弗拉达利研究所":
            return data.ItemDataLysandreLabs;
          case "下水道 1":
            return data.ItemDataSewersCh5;
          case "下水道 2":
            return data.ItemDataSewersCh6;
          default:
            return data.ItemDataLumiose;
        }
      })() || [];
    const filteredData: IItemPoint[] = [];
    const groupedData: Record<string, number> = {};
    itemData.forEach((item) => {
      if (name && item.location !== name) {
        return;
      }
      filteredData.push(item);
      groupedData[item.item] = (groupedData[item.item] || 0) + 1;
    });

    return { filteredData, groupedData };
  }, [data, name]);

  return (
    <Fragment key="wild-zone-list">
      <div className="section">
        <h1>{name}</h1>
      </div>

      <AreaPokemonSpawn location={name} />

      <div className="section">
        <h2>道具分布</h2>
        <MapComponent
          filter={{}}
          showReset={false}
        >
          <MapLayer
            data={filteredData}
            imageSize={imageSize}
          />
        </MapComponent>
      </div>

      <div className="section">
        <h2>道具列表</h2>
        <ItemRewardsTable
          headers={["道具", "数量"]}
          loading={loading}
          data={Object.entries(groupedData).map(([item, quantity]) => ({
            item,
            quantity,
          }))}
        />
      </div>
    </Fragment>
  );
};

const AreaDetailPage: FC = () => {
  const { name } = useParams<{ name: string }>();

  return AREA_NAMES.includes(name || "") ? <AreaDetailPageCore name={name!} /> : <NotFoundPage />;
};

export default AreaDetailPage;
