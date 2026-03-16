import { Adsense } from "@ctrl/react-adsense";
import Giscus from "@giscus/react";
import { FC, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "@/Routes";
import { Footer, Header, Notice, ScrollToTop, Sidebar, TocObserver } from "@/components";

import { BREAKPOINTS } from "./utils";

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

  const showAd = window.self !== window.top || localStorage.getItem("show-ad") === "true";

  useEffect(() => {
    if (showAd) {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8317643192080236";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
      document.body.classList.add("with-ads");

      return () => {
        document.body.removeChild(script);
        document.body.classList.remove("with-ads");
      };
    }
  }, [showAd]);

  return (
    <Router>
      <ScrollToTop />
      <TocObserver>
        <Header showDrawer={!sidebarShown} />
        <Notice />
        <div className="md:flex relative flex-1">
          {sidebarShown ? <Sidebar showAd={showAd} /> : null}
          <main>
            <div className="bg-white sm:rounded-2xl sm:shadow-xl">
              <Routes />
              {showAd ? (
                <div className="section">
                  <h2>广告</h2>
                  <Adsense
                    client="ca-pub-8317643192080236"
                    slot="8544171099"
                    className="block"
                    layout="in-article"
                    format="fluid"
                  />
                </div>
              ) : null}
              <div className="giscus section">
                <Giscus
                  host="https://giscus.xzonn.top"
                  repo="Xzonn/PokemonLZADatabase"
                  repoId="R_kgDOQE57vg"
                  category="General"
                  categoryId="DIC_kwDOQE57vs4Cw8Fx"
                  mapping="specific"
                  term="评论区"
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
