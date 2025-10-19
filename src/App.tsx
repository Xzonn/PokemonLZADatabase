import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import MoveDetailPage from "./pages/MoveDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchBar from "./components/search/SearchBar";
import ScrollToTop from "./components/ScrollToTop";
import { Footer } from "./components";
import TypeDetailPage from "./pages/TypeDetailPage";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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

        {/* 主要内容区域 */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/p/:name"
              element={<PokemonDetailPage />}
            />
            <Route
              path="/m/:name"
              element={<MoveDetailPage />}
            />
            <Route
              path="/t/:name"
              element={<TypeDetailPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        {/* 页脚 */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
