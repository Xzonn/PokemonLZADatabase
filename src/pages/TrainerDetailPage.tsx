import { FC, Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import { NormalTrainerTable } from "@/components";
import { TrainerNormal } from "@/types";
import { DEFAULT_TITLE, Icon, TRNAME_WITH_ICONS, useImport } from "@/utils";

import NotFoundPage from "./NotFoundPage";

interface IProps {
  data: string;
}

const trnameEqual = (trname: string, name: string) => {
  if (trname === "塔霓/盖伊") {
    return name === "塔霓" || name === "盖伊";
  } else if (name === "弗拉达利") {
    return trname === "弗拉达利" || trname === "Ｆ";
  } else {
    return trname === name;
  }
};

const TrainerDetailPageCore: FC<IProps> = ({ data: name }) => {
  useEffect(() => {
    document.title = `${name} - ${DEFAULT_TITLE}`;
  }, [name]);

  const [data, loading] = useImport(async () => (await import("@/data/tr/normal.json")).default as TrainerNormal[]);
  const filteredData = data?.filter((tr) => trnameEqual(tr.trname, name)) || [];

  return (
    <Fragment key="pokemon-list">
      <div className="section">
        <div className="header-icon">
          <Icon
            name={name}
            size={48}
          />
        </div>
        <h1>{name}</h1>
      </div>

      <div className="section">
        <p>点击每行的“＋”可以查看宝可梦详情。</p>
        <NormalTrainerTable
          loading={loading}
          data={filteredData || []}
        />
      </div>
    </Fragment>
  );
};

const TrainerDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return TRNAME_WITH_ICONS.includes(name || "") ? <TrainerDetailPageCore data={name!} /> : <NotFoundPage />;
};

export default TrainerDetailPage;
