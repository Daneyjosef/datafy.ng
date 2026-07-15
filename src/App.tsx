import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { AiSolutions } from "./pages/AiSolutions";
import { Government } from "./pages/Government";
import { Industries } from "./pages/Industries";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
          <Route path="/government" element={<Government />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
