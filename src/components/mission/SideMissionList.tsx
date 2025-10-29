import { useRequest } from "ahooks";
import L, { divIcon } from "leaflet";
import { FC, Fragment, useMemo, useState } from "react";

import { LeafletMap } from "../map";
import { SideMissionTable } from "./SideMissionTable";

import { onUseRequestError } from "@/utils";

export const SideMissionList: FC = () => {
  const { data = null, loading } = useRequest(
    async () => {
      const realData = await import(`@/data/mission/side`);
      return realData.SideMissionData;
    },
    {
      onError: onUseRequestError,
    },
  );

  const [active, setActive] = useState<number | null>(null);

  const layers = useMemo(() => {
    const layer = L.featureGroup();
    const filteredData = active !== null ? data?.filter((mission) => mission.index === active) : data;

    filteredData?.forEach((mission) => {
      const marker = L.marker(L.latLng(-mission.y / 8, mission.x / 8), {
        icon: divIcon({
          className: "icon-side-mission",
          iconSize: [24, 24],
        }),
      }).bindTooltip(`#${mission.index.toString().padStart(3, "0")} ${mission.name}`, {
        direction: "top",
        offset: [0, -10],
      });
      marker.addTo(layer);
    });
    const layers = {
      sideMission: {
        group: layer,
        name: "副任务",
        show: true,
      },
    };

    return layers;
  }, [data, active]);

  return (
    <Fragment key="side-mission-list">
      <div className="block">
        <h1>副任务一览</h1>
      </div>

      <div className="block">
        <h2>地图</h2>
        <LeafletMap
          loading={loading}
          layers={layers}
        />
      </div>

      <div className="block">
        <h2>任务列表</h2>
        <SideMissionTable
          loading={loading}
          data={data || []}
          setActive={setActive}
        />
      </div>
    </Fragment>
  );
};
