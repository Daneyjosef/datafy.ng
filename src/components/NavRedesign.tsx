import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SOLUTIONS } from "../data/solutions";

const productLinks = [
  { label: "Datafy Pay", detail: "Digital payments", href: "https://pay.datafy.ng/" },
  { label: "Datafy Data", detail: "Coming soon", href: "https://data.datafy.ng/" },
  { label: "Datafy Hub", detail: "Flexible workspace", href: "https://hub.datafy.ng/" },
];

function HashLink({ hash, children, className = "" }: { hash: string; children: React.ReactNode; className?: string }) {
  const { pathname } = useLocation();
  return pathname === "/" ? <a href={hash} className={className}>{children}</a> : <Link to={`/${hash}`} className={className}>{children}</Link>;
}

export function NavRedesign() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false); setProductsOpen(false); setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const close = (event: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) { setSolutionsOpen(false); setProductsOpen(false); } };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setSolutionsOpen(false); setProductsOpen(false); setMobileOpen(false); } };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, []);

  const navClass = (active: boolean) => `nav-link ${active ? "nav-link-active" : ""}`;

  return <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`} style={{ paddingTop: "env(safe-area-inset-top)" }}>
    <nav className="max-w-container mx-auto px-page h-[76px] flex items-center justify-between gap-8" aria-label="Primary navigation">
      <Link to="/" className="logo-link" aria-label="Datafy Technology home"><img src="/datafy-logo.png" alt="Datafy Technology" /></Link>
      <div className="hidden xl:flex items-center gap-7" ref={menuRef}>
        <Link to="/" className={navClass(pathname === "/")}>Home</Link>
        <div className="relative">
          <button type="button" className={navClass(SOLUTIONS.some((item) => item.path === pathname))} aria-expanded={solutionsOpen} onClick={() => { setSolutionsOpen((value) => !value); setProductsOpen(false); }}>Solutions <ChevronDown size={14} className={solutionsOpen ? "rotate-180" : ""} /></button>
          {solutionsOpen && <div className="nav-mega nav-mega-wide"><div className="nav-mega-intro"><span className="eyebrow">Capabilities</span><strong>Technology built around the work that matters.</strong><Link to="/industries">View industries <ArrowRight size={14} /></Link></div><div className="nav-mega-grid">{SOLUTIONS.map((solution) => { const Icon = solution.icon; return <Link key={solution.slug} to={solution.path} className="nav-mega-item"><Icon size={18} /><span><strong>{solution.navLabel}</strong><small>{solution.description}</small></span></Link>; })}</div></div>}
        </div>
        <div className="relative">
          <button type="button" className="nav-link" aria-expanded={productsOpen} onClick={() => { setProductsOpen((value) => !value); setSolutionsOpen(false); }}>Products <ChevronDown size={14} className={productsOpen ? "rotate-180" : ""} /></button>
          {productsOpen && <div className="nav-mega nav-products">{productLinks.map((product) => <a key={product.label} href={product.href} className="nav-product-link"><span><strong>{product.label}</strong><small>{product.detail}</small></span><ArrowRight size={15} /></a>)}</div>}
        </div>
        <Link to="/about" className={navClass(pathname === "/about")}>About</Link>
        <Link to="/contact" className={navClass(pathname === "/contact")}>Contact</Link>
      </div>
      <div className="flex items-center gap-3"><Link to="/contact" className="button-primary hidden sm:inline-flex">Start a project <ArrowRight size={16} /></Link><button type="button" className="menu-button xl:hidden" onClick={() => setMobileOpen(true)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Open menu"><Menu size={23} /></button></div>
    </nav>
    <div id="mobile-menu" className={`mobile-menu xl:hidden ${mobileOpen ? "mobile-menu-open" : ""}`} aria-hidden={!mobileOpen}>
      <div className="px-page pt-5 pb-12 min-h-full flex flex-col">
        <div className="flex items-center justify-between"><img src="/datafy-logo.png" alt="Datafy Technology" className="mobile-menu-logo h-auto" /><button type="button" className="menu-button" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={22} /></button></div>
        <div className="mobile-links mt-14"><Link to="/">Home</Link><HashLink hash="#solutions">Solutions</HashLink><HashLink hash="#products">Products</HashLink><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
        <div className="mt-12 pt-8 border-t border-white/12"><span className="eyebrow text-primary-fixed-dim">Products</span><div className="grid gap-3 mt-5">{productLinks.map((product) => <a key={product.label} href={product.href} className="flex justify-between items-center text-white/75"><span>{product.label}</span><small>{product.detail}</small></a>)}</div></div>
        <Link to="/contact" className="button-light mt-auto justify-center">Start a project <ArrowRight size={16} /></Link>
      </div>
    </div>
  </header>;
}
