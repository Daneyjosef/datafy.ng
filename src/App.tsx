import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { BottomTabBar } from "./components/BottomTabBar";
import { Home } from "./pages/Home";
import { AiSolutions } from "./pages/AiSolutions";
import { Government } from "./pages/Government";
import { Industries } from "./pages/Industries";
import { EnterpriseSoftware } from "./pages/EnterpriseSoftware";
import { CloudInfrastructure } from "./pages/CloudInfrastructure";
import { Cybersecurity } from "./pages/Cybersecurity";
import { DigitalTransformation } from "./pages/DigitalTransformation";
import { FinTech } from "./pages/FinTech";
import { SmartEnergy } from "./pages/SmartEnergy";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Signup } from "./pages/Signup";

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
      <main className="pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
          <Route path="/enterprise-software" element={<EnterpriseSoftware />} />
          <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/government" element={<Government />} />
          <Route path="/fintech" element={<FinTech />} />
          <Route path="/smart-energy" element={<SmartEnergy />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/:slug" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
      <BottomTabBar />
    </div>
  );
}

export default App;
