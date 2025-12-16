import { Button } from "antd";
import { divIcon } from "leaflet";
import { FC, Fragment } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { SideMissionData } from "@/data";
import { MissionSummary } from "@/types";
import { Link, MAP_CENTER, getCoord, getMissionIndex } from "@/utils";

import { LumioseMap } from "../map/LumioseMap";

const MapLayer: FC<{ data: MissionSummary[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1) {
    const mission = data[0];
    map.setView(getCoord([mission.x, mission.y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data?.map((mission) => {
    const index = getMissionIndex(mission.index);
    return (
      <Marker
        key={mission.index}
        position={getCoord([mission.x, mission.y])}
        icon={divIcon({
          className: "icon icon-side-mission",
          iconSize: [24, 24],
        })}
      >
        <Popup>
          <Link to={`/side/${index}`}>
            #{index} {mission.name}
          </Link>
        </Popup>
      </Marker>
    );
  });
};

const EMPTY_FILTER = {};

const sideMissionDataWithPoints = SideMissionData.filter((mission) => mission.x !== 0 && mission.y !== 0);

interface IProps {
  active?: number | null;
  setActive?: (name: number | null) => void;
}

export const SideMissionMap: FC<IProps> = ({ active, setActive }) => (
  <Fragment key="side-mission-map">
    <LumioseMap
      filter={EMPTY_FILTER}
      filterComponent={
        setActive ? (
          <div className="flex justify-center mb-2">
            <Button
              onClick={() => setActive(null)}
              disabled={active === null}
            >
              重置筛选
            </Button>
          </div>
        ) : null
      }
      showReset={false}
    >
      <MapLayer
        data={
          active !== null
            ? sideMissionDataWithPoints.filter((mission) => mission.index === active)
            : sideMissionDataWithPoints
        }
      />
    </LumioseMap>
    <div className="map-note">
      副任务信息参考自：
      <Link to="https://wiki.52poke.com/wiki/%E5%89%AF%E4%BB%BB%E5%8A%A1%EF%BC%88Z-A%EF%BC%89">神奇宝贝百科</Link>
    </div>
  </Fragment>
);
