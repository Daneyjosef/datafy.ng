import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavRedesign } from "./components/NavRedesign";
import { FooterRedesign } from "./components/FooterRedesign";
import { BottomTabBar } from "./components/BottomTabBar";
import { Seo } from "./components/Seo";
import { HomeApple } from "./pages/HomeApple";
import { AiSolutions } from "./pages/AiSolutions";
import { Government } from "./pages/Government";
import { Industries } from "./pages/Industries";
import { EnterpriseSoftware } from "./pages/EnterpriseSoftware";
import { CloudInfrastructure } from "./pages/CloudInfrastructure";
import { Cybersecurity } from "./pages/Cybersecurity";
import { DigitalTransformation } from "./pages/DigitalTransformation";
import { FinTech } from "./pages/FinTech";
import { SmartEnergy } from "./pages/SmartEnergy";
import { DomainsHosting } from "./pages/DomainsHosting";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound, Privacy, Terms } from "./pages/Legal";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app-shell min-h-screen bg-surface text-on-surface font-body">
      <ScrollToTop />
      <Seo />
      <NavRedesign />
      <main>
        <Routes>
          <Route path="/" element={<HomeApple />} />
          <Route path="/ai-solutions" element={<AiSolutions />} />
          <Route path="/enterprise-software" element={<EnterpriseSoftware />} />
          <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/government" element={<Government />} />
          <Route path="/fintech" element={<FinTech />} />
          <Route path="/smart-energy" element={<SmartEnergy />} />
          <Route path="/domains-hosting" element={<DomainsHosting />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signup" element={<Navigate to="/contact" replace />} />
          <Route path="/signup/fintech" element={<Navigate to="/fintech" replace />} />
          <Route path="/signup/:slug" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <FooterRedesign />
      <BottomTabBar />
    </div>
  );
}

export default App;
