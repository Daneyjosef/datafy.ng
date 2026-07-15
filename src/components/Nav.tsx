import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";
import { SOLUTIONS } from "../data/solutions";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isSolutionPage = SOLUTIONS.some((s) => s.path === pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "h-16 shadow-sm" : "h-20"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav className="flex justify-between items-center w-full px-page max-w-container mx-auto h-full">
        <Link to="/" className="flex items-center shrink-0">
          <img src="/datafy-logo.png" alt="Datafy Technology" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`font-body text-base tracking-tight transition-colors ${
              pathname === "/"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen((v) => !v)}
              className={`flex items-center gap-1 font-body text-base tracking-tight transition-colors ${
                isSolutionPage
                  ? "text-secondary font-semibold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              Solutions
              <ChevronDown
                size={16}
                className={`transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-xl p-3 grid gap-1">
                {SOLUTIONS.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <Link
                      key={solution.slug}
                      to={solution.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        pathname === solution.path
                          ? "bg-surface-container-low text-secondary"
                          : "hover:bg-surface-container-low text-on-surface"
                      }`}
                    >
                      <Icon size={18} className="text-secondary shrink-0" />
                      <span className="font-body text-sm">{solution.navLabel}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            to="/industries"
            className={`font-body text-base tracking-tight transition-colors ${
              pathname === "/industries"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Industries
          </Link>

          <Link
            to="/about"
            className={`font-body text-base tracking-tight transition-colors ${
              pathname === "/about"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`font-body text-base tracking-tight transition-colors ${
              pathname === "/contact"
                ? "text-secondary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden lg:flex text-on-surface-variant hover:text-primary transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="hidden md:block bg-primary text-on-primary px-6 py-3 rounded font-body font-semibold hover:bg-secondary transition-all active:scale-[0.98]">
            Schedule Consultation
          </button>
        </div>
      </nav>
    </header>
  );
}
