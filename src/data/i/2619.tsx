import { useLocalStorageState } from "ahooks";
import { Button, Popconfirm, Radio } from "antd";
import cn from "classnames";
import { divIcon } from "leaflet";
import { FC, useMemo } from "react";
import { Marker, Popup } from "react-leaflet";

import { ItemTable, LumioseMap } from "@/components";
import { IPositionWithPoint } from "@/types";
import { getCoord } from "@/utils";

import raw from "./2619-location.txt?raw";
import { ItemFullData } from "./detail";

const lines = raw.trim().split("\n");
const header = lines[0].split("\t");

export const Positions = lines.slice(1).map((line, index) => {
  const parts = line.split("\t");
  const dict = Object.fromEntries(parts.map((part, i) => [header[i], part]));
  const position: IPositionWithPoint = {
    name: `${index}`,
    index: index,
    x: parseInt(dict.X, 10),
    y: parseInt(dict.Y, 10),
  };
  return position;
});

const CANARI_PLUSHES = ItemFullData.filter((item) => item.priceColorfulScrew > 0);

interface IMapLayerProps {
  data: IPositionWithPoint[];
  obtained: number[];
  setObtained: (ids: number[]) => void;
}

const MapLayer: FC<IMapLayerProps> = ({ data, obtained, setObtained }) =>
  data.map((position) => {
    const isObtained = obtained.includes(position.index);

    return (
      <Marker
        key={position.index}
        position={getCoord([position.x, position.y])}
        icon={divIcon({
          className: cn("icon icon-colorful-screw transition-[filter]", isObtained ? "grayscale" : "grayscale-0"),
          iconSize: [24, 24],
        })}
      >
        <Popup>
          <div className="text-center">#{100 - position.index}</div>
          <Button
            className="block"
            type="link"
            onClick={
              isObtained
                ? () => setObtained(obtained.filter((id) => id !== position.index))
                : () => setObtained([...obtained, position.index])
            }
          >
            {isObtained ? "标记为未获得" : "标记为已获得"}
          </Button>
        </Popup>
      </Marker>
    );
  });

const EMPTY_FILTER = {};

interface IFilter {
  status: "all" | "obtained" | "unobtained";
}

const Content: FC = () => {
  const [obtained, setObtained] = useLocalStorageState<number[]>("za-colorful-screw-obtained", {
    defaultValue: [],
  });
  const [filter, setFilter] = useLocalStorageState<IFilter>("za-colorful-screw-filter", {
    defaultValue: { status: "all" },
  });
  const filteredData = useMemo(
    () =>
      filter.status === "all"
        ? Positions
        : Positions.filter((item) =>
            filter.status === "obtained" ? obtained.includes(item.index) : !obtained.includes(item.index),
          ),
    [filter, obtained],
  );

  return (
    <>
      <div className="section">
        <h2>地图分布</h2>
        <div className="text-center mb-2">
          已获得：{obtained.length}/{Positions.length}
        </div>
        <LumioseMap
          filter={EMPTY_FILTER}
          filterComponent={
            <div className="flex-container mb-2">
              <Radio.Group
                optionType="button"
                value={filter.status}
                onChange={(e) => setFilter({ status: e.target.value })}
                options={[
                  { value: "all", label: "筛选全部" },
                  { value: "obtained", label: "仅看已获得" },
                  { value: "unobtained", label: "仅看未获得" },
                ]}
              />
              <Popconfirm
                title="确定要重置状态吗？所有的标记都会被删除。"
                onConfirm={() => {
                  setObtained([]);
                  setFilter({ status: "all" });
                }}
              >
                <Button>重置状态</Button>
              </Popconfirm>
            </div>
          }
          showReset={false}
        >
          <MapLayer
            data={filteredData}
            obtained={obtained}
            setObtained={setObtained}
          />
        </LumioseMap>
      </div>

      <div className="section">
        <h2>兑换方式</h2>
        <p>
          与木根工程门口旁的 NPC 对话，可以用彩色螺丝兑换卡娜莉玩偶。获得所有 100 个彩色螺丝后，再次与 NPC
          对话，可以获得巨大卡娜莉玩偶，这个玩偶会放在旅馆Ｚ自己的房间里。
        </p>
        <ItemTable
          headers={["编号", "道具", "彩色螺丝数量", "说明"]}
          data={CANARI_PLUSHES}
        />
        <figure>
          <img src="https://i0.hdslb.com/bfs/new_dyn/ce8780f658fc175bbeb39b961df0573a16114399.jpg" />
          <figcaption>巨大卡娜莉玩偶</figcaption>
        </figure>
      </div>
    </>
  );
};

export default Content;
