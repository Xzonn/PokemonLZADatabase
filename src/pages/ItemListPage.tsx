import React, { Fragment, useEffect } from "react";

import { ItemTable } from "@/components";
import { ItemDetailData } from "@/data/i/detail";
import { EItemPocket } from "@/types";
import { DEFAULT_TITLE, Link } from "@/utils";

const ItemListPage: React.FC = () => {
  useEffect(() => {
    document.title = `道具一览 - ${DEFAULT_TITLE}`;
  }, []);

  return (
    <Fragment key="pokemon-list">
      <div className="block">
        <h1>道具一览</h1>
      </div>

      {EItemPocket.map((pocket, index) => (
        <div
          key="pocket"
          className="block"
        >
          <h2>{pocket}</h2>
          {pocket === "招式学习器" ? (
            <div className="text-center">
              参见：<Link to="/招式学习器一览">招式学习器一览</Link>
            </div>
          ) : (
            <ItemTable data={ItemDetailData.filter((item) => item.pocket === index)} />
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default ItemListPage;
