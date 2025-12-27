import { FC } from "react";

import { ItemIconWithoutTooltip } from "@/components";
import { ItemDataById, ItemDataByName } from "@/data";
import { Link } from "@/utils";

// interface IProps {
//   id?: number;
//   name?: string;
// }

type IProps =
  | {
      id: number;
    }
  | {
      name: string;
    };

export const ItemLink: FC<IProps> = (props) => {
  const item = "id" in props ? ItemDataById[props.id] : "name" in props ? ItemDataByName[props.name] : undefined;
  return item ? (
    <>
      <ItemIconWithoutTooltip
        item={item}
        className="icon-inline"
      />
      <Link to={item.page ? `/${item.page}` : `/i/${item?.name}`}>{item.name}</Link>
    </>
  ) : null;
};
