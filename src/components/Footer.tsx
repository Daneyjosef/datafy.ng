import { Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary py-20 border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-page max-w-container mx-auto">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src="/datafy-icon.png" alt="" className="h-7 w-auto" />
            <h2 className="font-display text-2xl font-bold tracking-tighter">Datafy Technology</h2>
          </div>
          <p className="text-on-primary-fixed-variant font-body mb-8">
            African Excellence, Global Impact. Engineering the future since 2018.
          </p>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Global Headquarters</h4>
          <ul className="space-y-4">
            {["Lagos Hub", "Nairobi Office", "London Satellite"].map((item) => (
              <li key={item}>
                <a className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Capabilities</h4>
          <ul className="space-y-4">
            {["AI Architecture", "Sustainability", "Privacy Architecture"].map((item) => (
              <li key={item}>
                <a className="text-on-primary-fixed-variant hover:text-on-primary font-body transition-all" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label text-xs uppercase tracking-widest opacity-60 mb-6">Contact</h4>
          <p className="text-on-primary-fixed-variant font-body mb-4">hello@datafy.ng</p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-on-primary/10 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all"
              href="#"
              aria-label="Website"
            >
              <Globe size={16} />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-on-primary/10 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all"
              href="#"
              aria-label="Social"
            >
              <Share2 size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container mx-auto px-page mt-20 pt-8 border-t border-on-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-primary-fixed-variant font-label text-xs">© 2026 Datafy Technology. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="text-on-primary-fixed-variant font-label text-xs hover:text-on-primary transition-all" href="#">
            Terms of Service
          </a>
          <a className="text-on-primary-fixed-variant font-label text-xs hover:text-on-primary transition-all" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
