import { useRequest } from "ahooks";
import { Button, TableColumnsType } from "antd";
import { divIcon } from "leaflet";
import React, { FC, Fragment, useEffect, useMemo, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { Map, MoveTable, TMCell } from "@/components";
import { ItemDataByName, MoveDataByName } from "@/data";
import { Move, TMMove } from "@/types";
import { DEFAULT_TITLE, MAP_CENTER, getCoord, getTMMethod, onUseRequestError } from "@/utils";

const getColumns = (setActive: (v: number | null) => void): TableColumnsType<TMMove & Move> => [
  {
    title: "编号",
    dataIndex: "index",
    render: (_, row) => <TMCell item={ItemDataByName[row.tmName]} />,
    sorter: (a, b) => a.index - b.index,
  },
  {
    title: "获取方式",
    key: "method",
    render: (_, row) =>
      getTMMethod(row, () => {
        setActive(row.index);
        document.querySelector("#地图")?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }),
  },
];

const TMListMapLayer: FC<{ data: TMMove[] }> = ({ data }) => {
  const map = useMap();

  if (data?.length === 1 && data[0].x !== null && data[0].y !== null) {
    const mission = data[0];
    map.setView(getCoord([mission.x!, mission.y!]), 2);
  } else {
    map.setView(getCoord(MAP_CENTER), 0);
  }

  return data
    ?.filter((mission) => mission.x !== null && mission.y !== null)
    .map((mission) => (
      <Marker
        key={mission.index}
        position={getCoord([mission.x!, mission.y!])}
        icon={divIcon({
          className: "icon-side-mission",
          iconSize: [24, 24],
        })}
      >
        <Popup>{`#${mission.index.toString().padStart(3, "0")} ${mission.name}`}</Popup>
      </Marker>
    ));
};

const TMListPage: React.FC = () => {
  useEffect(() => {
    document.title = `招式学习器一览 - ${DEFAULT_TITLE}`;
  }, []);

  const { data = null, loading } = useRequest(
    async () => {
      const tmData = await import(`@/data/tm`).then((mod) => mod.TMData);
      return tmData.map((tm) => {
        const { name: tmName, ...rest } = tm;
        return {
          tmName,
          ...rest,
          ...MoveDataByName[tm.move],
        } as TMMove;
      });
    },
    {
      refreshDeps: [],
      onError: onUseRequestError,
    },
  );

  const [active, setActive] = useState<number | null>(null);
  const columns = useMemo(() => getColumns(setActive), [setActive]);

  return (
    <Fragment key="tm-list">
      <div className="block">
        <h1>招式学习器一览</h1>
      </div>

      <div className="block">
        <h2 id="地图">地图</h2>
        <div className="flex justify-center mb-2">
          <Button
            onClick={() => setActive(null)}
            disabled={loading || active === null}
          >
            重置筛选
          </Button>
        </div>
        <Map loading={loading}>
          {data ? (
            <TMListMapLayer data={active !== null ? data.filter((mission) => mission.index === active) : data} />
          ) : null}
        </Map>
        <p className="text-center indent-0">
          地点坐标参考自：
          <a
            href="https://www.serebii.net/pokearth/lumiosecity/"
            target="_blank"
            rel="noreferrer"
          >
            Serebii.net
          </a>
        </p>
      </div>

      <div className="block">
        <h2>列表</h2>
        <MoveTable<TMMove>
          loading={loading}
          data={data || []}
          extraColumns={columns}
          pagination={false}
        />
      </div>
    </Fragment>
  );
};

export default TMListPage;
