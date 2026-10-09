import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Solution } from "../data/solutions";

function Hero({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <section className="relative overflow-hidden pt-40 lg:pt-48 pb-24 lg:pb-32 reveal bg-white">
      <div className="px-page max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7 z-10">
          <span className="eyebrow mb-6 block">
            {solution.eyebrow}
          </span>
          <h1 className="font-display text-[46px] leading-[.98] lg:text-[76px] tracking-[-0.06em] font-semibold mb-8">
            {solution.title} <span className="text-secondary">{solution.highlight}</span>
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant max-w-xl mb-4">
            {solution.description}
          </p>
          {solution.poweredBy && (
            <p className="font-label text-xs uppercase tracking-widest text-secondary mb-8">
              {solution.poweredBy}
            </p>
          )}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to={`/contact?service=${encodeURIComponent(solution.navLabel)}`}
              className="button-primary"
            >
              Discuss your project
            </Link>
            <Link to="/contact" className="button-secondary">
              Book a Free Consultation
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
          <div className="w-full aspect-square max-w-md rounded-full bg-primary-container flex items-center justify-center relative after:absolute after:inset-[14%] after:rounded-full after:border after:border-primary-fixed/20">
            <Icon className="w-28 h-28 text-primary-fixed-dim relative z-10" strokeWidth={1.1} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ solution }: { solution: Solution }) {
  return (
    <section className="section-block px-page max-w-container mx-auto reveal">
      <div className="mb-16 max-w-2xl">
        <span className="eyebrow mb-4 block">
          Services
        </span>
        <h2 className="display-section">What we deliver.</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-outline-variant/40">
        {solution.services.map((service) => (
          <div
            key={service}
            className="group flex items-center gap-4 border-r border-b border-outline-variant/40 p-7 min-h-28 hover:bg-white transition-all"
          >
            <CheckCircle2 className="text-secondary shrink-0" size={22} />
            <span className="font-body text-lg">{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA({ solution }: { solution: Solution }) {
  return (
    <section className="section-block px-page max-w-container mx-auto reveal">
      <div className="contact-panel text-left">
        <div><span className="eyebrow">Start a project</span><h2 className="display-section mt-5">
          Move from idea to action.
        </h2>
        </div><div>
        <p className="font-body text-lg text-on-surface-variant">
          Tell us what you need, and we will discuss a practical next step for your project.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            to={`/contact?service=${encodeURIComponent(solution.navLabel)}`}
            className="button-primary"
          >
            Discuss a Project
          </Link>
          <Link
            to="/contact"
            className="button-secondary"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div></div>
      </div>
    </section>
  );
}

export function SolutionPageTemplate({
  solution,
  children,
}: {
  solution: Solution;
  children?: ReactNode;
}) {
  useScrollReveal();

  return (
    <>
      <Hero solution={solution} />
      <ServicesGrid solution={solution} />
      {children}
      <CTA solution={solution} />
    </>
  );
}
