import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { OFFICES } from "../data/offices";

const solutions = [
  ["Software engineering", "/enterprise-software"], ["Artificial intelligence", "/ai-solutions"],
  ["Cybersecurity", "/cybersecurity"], ["Cloud infrastructure", "/cloud-infrastructure"],
  ["Digital transformation", "/digital-transformation"], ["Fintech", "/fintech"],
] as const;

export function FooterRedesign() {
  const year = new Date().getFullYear();
  return <footer className="site-footer">
    <div className="max-w-container mx-auto px-page pt-20 lg:pt-28 pb-8">
      <div className="footer-top">
        <div className="max-w-sm"><img src="/datafy-logo.png" alt="Datafy Technology" className="footer-logo" /><p>Intelligent digital products, secure infrastructure, and scalable technology solutions for a connected future.</p><a href="mailto:info@datafy.ng" className="footer-email">info@datafy.ng <ArrowUpRight size={18} /></a></div>
        <div><h2>Solutions</h2><ul>{solutions.map(([label, to]) => <li key={to}><Link to={to}>{label}</Link></li>)}</ul></div>
        <div><h2>Products</h2><ul><li><a href="https://pay.datafy.ng/">Datafy Pay</a></li><li><a href="https://data.datafy.ng/">Datafy Data <small>Coming soon</small></a></li><li><a href="https://hub.datafy.ng/">Datafy Hub</a></li></ul></div>
        <div><h2>Company</h2><ul><li><Link to="/about">About</Link></li><li><Link to="/industries">Industries</Link></li><li><Link to="/contact">Contact</Link></li><li><Link to="/privacy">Privacy</Link></li><li><Link to="/terms">Terms</Link></li></ul></div>
      </div>
      <div className="footer-locations"><span className="eyebrow">Our locations</span>{OFFICES.map((office) => <span key={office.city}>{office.city}{office.status === "opening-soon" && <small>Opening soon</small>}</span>)}</div>
      <div className="footer-bottom"><p>© {year} Datafy Technology Limited. All rights reserved.</p><p>Technology that moves Africa forward.</p></div>
    </div>
  </footer>;
}
