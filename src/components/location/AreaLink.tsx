import { FC } from "react";

import { AREA_NAMES } from "@/data/areas";
import { Link } from "@/utils";

interface IProps {
  link?: string;
  name: string;
}

export const AreaLink: FC<IProps> = ({ link: linkFromProps, name }) => {
  const link = linkFromProps || name;
  return AREA_NAMES.includes(name) ? <Link to={`/area/${link}`}>{name}</Link> : name;
};
