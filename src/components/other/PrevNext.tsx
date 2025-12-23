import { FC } from "react";

import { Link } from "@/utils";

interface IProps {
  prev?: {
    link: string;
    name: string;
  };
  next?: {
    link: string;
    name: string;
  };
}

export const PrevNext: FC<IProps> = ({ prev, next }) => (
  <div className="flex justify-between my-4">
    {prev ? <Link to={prev.link}>← {prev.name}</Link> : <div />}
    {next ? <Link to={next.link}>{next.name} →</Link> : <div />}
  </div>
);
