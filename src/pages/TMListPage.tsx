import { Button, TableColumnsType } from "antd";
import { divIcon } from "leaflet";
import React, { FC, Fragment, useEffect, useMemo, useState } from "react";
import { Marker, Popup } from "react-leaflet";

import { LumioseMap, MoveTable, TMCell } from "@/components";
import { ItemDataByName } from "@/data";
import { TMFull } from "@/types";
import { DEFAULT_TITLE, Link, getCoord, getTMMethod, useImport, useLoadingAnchor, useViewBounds } from "@/utils";

const getColumns = (setActive: (v: number | null) => void): TableColumnsType<TMFull> => [
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
        document.querySelector("#地图")?.scrollIntoView({ behavior: "smooth" });
      }),
  },
];

const TMListMapLayer: FC<{ data: TMFull[] }> = ({ data }) => {
  const filteredData = data.filter((tm) => tm.x !== null && tm.y !== null);

  useViewBounds(filteredData as { x: number; y: number }[]);

  return filteredData.map((tm) => (
    <Marker
      key={tm.index}
      position={getCoord([tm.x!, tm.y!])}
      icon={divIcon({
        className: `icon icon-tm-${tm.type}`,
        iconSize: [24, 24],
      })}
    >
      <Popup>
        No.{tm.index.toString().padStart(3, "0")} <Link to={`/m/${tm.name}`}>{tm.name}</Link>
      </Popup>
    </Marker>
  ));
};

const EMPTY_FILTER = {};

const TMListPage: React.FC = () => {
  useEffect(() => {
    document.title = `招式学习器一览 - ${DEFAULT_TITLE}`;
  }, []);

  const [data, loading] = useImport(async () => (await import("@/data/tm")).TMData);

  const [active, setActive] = useState<number | null>(null);
  const columns = useMemo(() => getColumns(setActive), [setActive]);

  useLoadingAnchor([loading]);

  return (
    <Fragment key="tm-list">
      <div className="section">
        <h1>招式学习器一览</h1>
      </div>

      <div className="section">
        <h2 id="地图">地图</h2>
        <LumioseMap
          filter={EMPTY_FILTER}
          filterComponent={
            <div className="flex justify-center mb-2">
              <Button
                onClick={() => setActive(null)}
                disabled={loading || active === null}
              >
                重置筛选
              </Button>
            </div>
          }
          showReset={false}
          loading={loading}
        >
          {data ? (
            <TMListMapLayer data={active !== null ? data.filter((mission) => mission.index === active) : data} />
          ) : null}
        </LumioseMap>
      </div>

      <div className="section">
        <h2>列表</h2>
        <MoveTable<TMFull>
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
