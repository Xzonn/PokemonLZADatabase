import Giscus from "@giscus/react";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "@/Routes";
import { Footer, ScrollToTop, SearchBar, Sidebar } from "@/components";

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <nav className="bg-white shadow-lg border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-2xl font-bold text-primary"
            >
              Z-A 数据库
            </Link>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>

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
      {/* <TableOfContents /> */}
    </div>
    <Footer />
  </Router>
);

export default App;
