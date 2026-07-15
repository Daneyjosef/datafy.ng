import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Solutions", to: "/" },
  { label: "AI Solutions", to: "/ai-solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Government", to: "/government" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-outline-variant/20 bg-surface/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "h-16 shadow-sm" : "h-20"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-page max-w-container mx-auto h-full">
        <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-primary">
          Datafy Technology
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-base tracking-tight transition-colors ${
                pathname === link.to
                  ? "text-secondary font-semibold border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden lg:flex text-on-surface-variant hover:text-primary transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="bg-primary text-on-primary px-6 py-3 rounded font-body font-semibold hover:bg-secondary transition-all active:scale-[0.98]">
            Schedule Consultation
          </button>
          <button
            className="md:hidden text-on-surface-variant"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/20 p-6 flex flex-col gap-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-primary transition-colors font-body text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
