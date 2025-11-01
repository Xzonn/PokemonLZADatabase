import { divIcon } from "leaflet";
import { FC, useState } from "react";
import { Marker, useMap } from "react-leaflet";

import raw from "./2619-location.txt?raw";
import { ItemFullData } from "./detail";

import { ItemTable, Map } from "@/components";
import { Position } from "@/types";
import { MAP_CENTER, getCoord } from "@/utils";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const Positions = lines.slice(1).map((line, index) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const position: Position = {
    index: index,
    x: parseInt(dict["X"], 10),
    y: parseInt(dict["Y"], 10),
  };
  return position;
});

const CANARI_PLUSHES = ItemFullData.filter((item) => item.priceColorfulScrew > 0);

const MapLayer: FC<{ data: Position[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1) {
    const position = data[0];
    map.setView(getCoord([position.x, position.y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data.map((position) => (
    <Marker
      key={position.index}
      position={getCoord([position.x, position.y])}
      icon={divIcon({
        className: `icon-colorful-screw`,
        iconSize: [24, 24],
      })}
    />
  ));
};

const Content: FC = () => {
  const [active] = useState<number | null>(null);

  return (
    <>
      <div className="block">
        <h2>地图分布</h2>
        <Map>
          <MapLayer data={active !== null ? Positions.filter((mission) => mission.index === active) : Positions} />
        </Map>
      </div>

      <div className="block">
        <h2>兑换方式</h2>
        <p>与木根工程门口旁的 NPC 对话，可以用彩色螺丝兑换卡娜莉玩偶。</p>
        <ItemTable
          headers={["编号", "道具", "彩色螺丝数量", "说明"]}
          data={CANARI_PLUSHES}
        />
      </div>
    </>
  );
};

export default Content;
