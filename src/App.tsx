import Giscus from "@giscus/react";
import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { BREAKPOINTS } from "./utils";

import Routes from "@/Routes";
import { Footer, Header, Notice, ScrollToTop, Sidebar, TocObserver } from "@/components";

const App: FC = () => {
  const { md } = BREAKPOINTS;

  const [sidebarShown, setSidebarShown] = useState(false);

  useEffect(() => {
    const handleResize = () => setSidebarShown(window.innerWidth >= md);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [md]);

  return (
    <Router>
      <TocObserver>
        <ScrollToTop />
        <Header showDrawer={!sidebarShown} />
        <Notice />
        <div className="md:flex relative flex-1">
          {sidebarShown ? <Sidebar /> : null}
          <main>
            <div className="bg-white sm:rounded-2xl sm:shadow-xl">
              <Routes />
              <div className="giscus block">
                <Giscus
                  host="https://giscus.xzonn.top"
                  repo="Xzonn/PokemonLZADatabase"
                  repoId="R_kgDOQE57vg"
                  category="General"
                  categoryId="DIC_kwDOQE57vs4Cw8Fx"
                  mapping="specific"
                  term={"评论区"}
                  reactions-enabled="1"
                  emit-metadata="0"
                  input-position="top"
                  theme="preferred_color_scheme"
                  lang="zh-CN"
                />
              </div>
            </div>
          </main>
        </div>
      </TocObserver>
      <Footer />
    </Router>
  );
};

export default App;
