import { Link } from "react-router-dom";
import { OFFICES } from "../data/offices";

export function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary py-20 border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-page max-w-container mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src="/datafy-icon.png" alt="Datafy Technology" className="h-7 w-auto" />
          </div>
          <p className="text-on-primary-fixed-variant font-body mb-8">
            Digital products and technology solutions built for Africa.
          </p>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Our locations</h4>
          <ul className="space-y-4">
            {OFFICES.map((office) => (
              <li key={office.city} className="flex items-center gap-2">
                <span className="text-on-primary-fixed-variant font-body">
                  {office.city}
                </span>
                {office.status === "opening-soon" && (
                  <span className="font-label text-[10px] uppercase tracking-widest text-secondary-fixed bg-on-primary/10 px-2 py-0.5 rounded-full">
                    Opening Soon
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Explore</h4>
          <ul className="space-y-4">
            <li><a href="https://pay.datafy.ng/" className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all">Datafy Pay</a></li>
            <li><Link to="/fintech" className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all">Payments & FinTech</Link></li>
            <li><Link to="/industries" className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all">Industries</Link></li>
            <li><Link to="/about" className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all">About Datafy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Contact</h4>
          <a href="mailto:info@datafy.ng" className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all">info@datafy.ng</a>
          <div className="mt-4"><Link to="/contact" className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all">Contact us</Link></div>
        </div>
      </div>
      <div className="max-w-container mx-auto px-page mt-20 pt-8 border-t border-on-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-primary-fixed-variant font-label text-xs">© 2026 Datafy Technology. All rights reserved.</p>
      </div>
    </footer>
  );
}
