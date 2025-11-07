import { Button } from "antd";
import { divIcon } from "leaflet";
import { FC, Fragment } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { Map } from "@/components";
import { SideMission } from "@/types";
import { Link, MAP_CENTER, getCoord, useImport } from "@/utils";

const MapLayer: FC<{ data: SideMission[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1) {
    const mission = data[0];
    map.setView(getCoord([mission.x, mission.y]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data?.map((mission) => {
    const index = mission.index > 0 ? mission.index.toString().padStart(3, "0") : `EX${-mission.index}`;
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

interface IProps {
  active?: number | null;
  setActive?: (name: number | null) => void;
}

export const SideMissionMap: FC<IProps> = ({ active, setActive }) => {
  const [data, loading] = useImport(async () => (await import("@/data/mission/side")).SideMissionData);

  return (
    <Fragment key="side-mission-map">
      {setActive ? (
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setActive(null)}
            disabled={loading || active === null}
          >
            重置筛选
          </Button>
        </div>
      ) : null}
      <Map loading={loading}>
        {data ? <MapLayer data={active !== null ? data.filter((mission) => mission.index === active) : data} /> : null}
      </Map>
      <div className="map-note">
        地点坐标参考自：
        <Link to="https://www.serebii.net/pokearth/lumiosecity/">Serebii.net</Link>
      </div>
      <div className="map-note">
        副任务信息参考自：
        <Link to="https://wiki.52poke.com/wiki/%E5%89%AF%E4%BB%BB%E5%8A%A1%EF%BC%88Z-A%EF%BC%89">神奇宝贝百科</Link>
      </div>
    </Fragment>
  );
};
