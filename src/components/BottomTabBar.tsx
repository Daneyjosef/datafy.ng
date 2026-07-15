import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building2, Grip, Home, Phone, User, X } from "lucide-react";
import { SOLUTIONS } from "../data/solutions";

const TABS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Industries", to: "/industries", icon: Building2 },
  { label: "About", to: "/about", icon: User },
  { label: "Contact", to: "/contact", icon: Phone },
] as const;

export function BottomTabBar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { pathname } = useLocation();

  const isSolutionPage = SOLUTIONS.some((s) => s.path === pathname);

  useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  return (
    <>
      {sheetOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setSheetOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 bg-surface-container-lowest rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out ${
          sheetOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 5rem)" }}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <h3 className="font-display text-xl font-semibold">Solutions</h3>
          <button
            onClick={() => setSheetOpen(false)}
            className="w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto px-4 pb-4 grid gap-1">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.slug}
                to={solution.path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg transition-colors ${
                  pathname === solution.path
                    ? "bg-surface-container-low text-secondary"
                    : "text-on-surface"
                }`}
              >
                <Icon size={20} className="text-secondary shrink-0" />
                <span className="font-body text-base">{solution.navLabel}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <nav
        className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/20"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="grid grid-cols-5 h-16">
          <Link
            to={TABS[0].to}
            className={`flex flex-col items-center justify-center gap-1 touch-manipulation ${
              pathname === TABS[0].to ? "text-secondary" : "text-on-surface-variant"
            }`}
          >
            <Home size={22} />
            <span className="font-label text-[10px]">{TABS[0].label}</span>
          </Link>

          <button
            onClick={() => setSheetOpen((v) => !v)}
            className={`flex flex-col items-center justify-center gap-1 touch-manipulation ${
              isSolutionPage || sheetOpen ? "text-secondary" : "text-on-surface-variant"
            }`}
          >
            <Grip size={22} />
            <span className="font-label text-[10px]">Solutions</span>
          </button>

          {TABS.slice(1).map((tab) => {
            const Icon = tab.icon;
            const active = pathname === tab.to;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={`flex flex-col items-center justify-center gap-1 touch-manipulation ${
                  active ? "text-secondary" : "text-on-surface-variant"
                }`}
              >
                <Icon size={22} />
                <span className="font-label text-[10px]">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
