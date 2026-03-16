import { Adsense } from "@ctrl/react-adsense";
import cn from "classnames";
import { FC, useContext } from "react";

import { Navigation } from "./Navigation";
import { TableOfContents } from "./TableOfContents";
import { TocContext } from "./TocObserver";

interface IProps {
  showAd?: boolean;
}

export const Sidebar: FC<IProps> = ({ showAd = false }) => {
  const { tocItems } = useContext(TocContext)!;

  return (
    <aside>
      <nav className="nav-site">
        <div className="nav-title">站内导航</div>
        <Navigation />
      </nav>
      {showAd ? (
        <nav>
          <div className="nav-title">广告</div>
          <Adsense
            client="ca-pub-8317643192080236"
            slot="2646785348"
            className="block"
            format="auto"
            responsive="true"
          />
        </nav>
      ) : null}
      <nav className={cn("nav-toc", tocItems.length > 0 ? "" : "hidden")}>
        <div className="nav-title">目录</div>
        <TableOfContents />
      </nav>
    </aside>
  );
};
