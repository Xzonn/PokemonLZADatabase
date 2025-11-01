import Giscus from "@giscus/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "@/Routes";
import { Footer, Header, Notice, ScrollToTop, Sidebar } from "@/components";

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <Notice />
    <div className="md:flex relative flex-1">
      <Sidebar />
      <main className="flex-1 p-0 sm:px-2 lg:px-4 sm:py-8">
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
    <Footer />
  </Router>
);

export default App;
