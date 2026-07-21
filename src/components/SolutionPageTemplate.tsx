import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Solution } from "../data/solutions";

function Hero({ solution }: { solution: Solution }) {
  const Icon = solution.icon;
  return (
    <section className="relative overflow-hidden pt-44 pb-32 px-page max-w-container mx-auto reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 z-10">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
            {solution.eyebrow}
          </span>
          <h1 className="font-display text-[40px] leading-[1.1] lg:text-[56px] font-bold mb-8">
            {solution.title} <span className="text-gradient">{solution.highlight}</span>
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
              to={`/signup/${solution.slug}`}
              className="bg-secondary text-on-secondary px-8 py-4 rounded font-display text-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <Rocket size={18} />
              Get Early Access
            </Link>
            <button className="border border-outline-variant px-8 py-4 rounded font-display text-lg hover:bg-surface-container-low transition-colors">
              Book a Free Consultation
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
          <div className="w-full aspect-square max-w-sm rounded-full bg-surface-container-low flex items-center justify-center">
            <Icon className="w-28 h-28 text-secondary" strokeWidth={1.25} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid({ solution }: { solution: Solution }) {
  return (
    <section className="py-24 px-page max-w-container mx-auto reveal">
      <div className="mb-16 max-w-2xl">
        <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
          Services
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold">What We Deliver</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {solution.services.map((service) => (
          <div
            key={service}
            className="group flex items-center gap-4 border border-outline-variant/30 rounded-lg p-6 hover:border-secondary hover:bg-surface-container-low transition-all"
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
    <section className="py-32 px-page max-w-container mx-auto text-center reveal">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold">
          Ready to transform your business?
        </h2>
        <p className="font-body text-lg text-on-surface-variant">
          Contact us today for a free consultation, or join the waitlist for the {solution.navLabel}{" "}
          software we're building.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to={`/signup/${solution.slug}`}
            className="bg-primary text-on-primary px-10 py-4 rounded font-display text-lg hover:bg-secondary transition-colors"
          >
            Join the Waitlist
          </Link>
          <Link
            to="/contact"
            className="border border-outline-variant px-10 py-4 rounded font-display text-lg hover:bg-surface-container-low transition-colors inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
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
