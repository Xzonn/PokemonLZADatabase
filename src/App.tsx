import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "./Routes";
import { Footer, Sidebar } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import SearchBar from "./components/search/SearchBar";
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-2xl shadow-xl">
              <Routes />
            </div>
          </main>
          {/* <TableOfContents /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
