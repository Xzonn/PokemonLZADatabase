import { FC } from "react";

import { Icon, Link, TRNAME_WITH_ICONS } from "@/utils";

interface IProps {
  name: string;
}

export const TrainerLink: FC<IProps> = ({ name }) => {
  switch (name) {
    case "茉蜜姬":
    case "安馨儿":
      return (
        <>
          <Icon
            name={name}
            size={22}
            className="icon-inline"
          />
          {name}
        </>
      );
    default:
      return TRNAME_WITH_ICONS.includes(name) ? (
        <>
          <Icon
            name={name}
            size={22}
            className="icon-inline"
          />
          <Link to={`/tr/${name}`}>{name}</Link>
        </>
      ) : null;
  }
};
