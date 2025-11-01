import { FC } from "react";

import { Link, halfToFull } from "@/utils";

interface IProps {
  id: number;
}

export const ZoneLink: FC<IProps> = ({ id }) =>
  id >= 1 && id <= 20 ? <Link to={`/z/${id}`}>{halfToFull(id.toString())}号野生特区</Link> : null;
