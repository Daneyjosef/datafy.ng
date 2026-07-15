import { Eye, Globe, Rocket } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ADVANTAGES } from "../data/solutions";
import { OFFICES } from "../data/offices";

function Hero() {
  return (
    <section className="relative pt-44 pb-24 px-page max-w-container mx-auto reveal">
      <div className="max-w-3xl">
        <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
          Standard of Excellence
        </span>
        <h1 className="font-display text-[40px] leading-[1.1] lg:text-[56px] font-bold mb-8">
          Architects of Digital <span className="text-gradient">Resilience.</span>
        </h1>
        <p className="font-body text-lg lg:text-xl text-on-surface-variant">
          Datafy is not just a technology provider; we are architects of digital resilience.
          Founded on the principle of "Strategic Sophistication," we bridge the gap between legacy
          operations and future-ready innovation.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-24 bg-surface-bright px-page max-w-container mx-auto reveal">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8">Our Story</h2>
          <div className="space-y-6 text-on-surface-variant font-body text-lg">
            <p>
              From our hubs in Lagos and Ibadan, we deliver global standards with localized
              intelligence, ensuring that every solution is optimized for the unique challenges of
              the African enterprise landscape. Nairobi and our London satellite are opening soon
              as we extend that reach further.
            </p>
            <p>
              We envision a future where African businesses compete globally through intelligent
              technology—helping organizations innovate, scale, and create lasting impact.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="bg-primary-container p-12 rounded-2xl text-on-primary flex flex-col justify-between aspect-square">
            <Eye className="w-10 h-10 text-secondary-fixed" />
            <div>
              <h3 className="font-display text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="opacity-80">
                To be the singular catalyst for Africa's emergence as a global digital leader by
                2030.
              </p>
            </div>
          </div>
          <div className="bg-secondary p-12 rounded-2xl text-on-secondary flex flex-col justify-between aspect-square transform translate-y-12">
            <Rocket className="w-10 h-10 text-on-secondary" />
            <div>
              <h3 className="font-display text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="opacity-80">
                Engineering precise, scalable software solutions that empower organizations to
                solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-32 bg-primary-container text-on-primary reveal">
      <div className="max-w-container mx-auto px-page">
        <div className="max-w-2xl mb-20">
          <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed mb-4 block">
            Why Choose Datafy?
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold">
            Engineering Certainty in an Uncertain World
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {ADVANTAGES.map((item) => (
            <div
              key={item.title}
              className="border-l border-on-primary-fixed-variant pl-8 py-4 hover:border-secondary-fixed transition-colors"
            >
              <h3 className="font-display text-xl font-semibold mb-4">{item.title}</h3>
              <p className="opacity-70 font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalPresence() {
  return (
    <section className="py-24 px-page max-w-container mx-auto reveal">
      <div className="mb-12 max-w-2xl">
        <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
          Global Reach
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold">Where We Operate</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {OFFICES.map((office) => (
          <div
            key={office.city}
            className="flex items-center gap-4 border border-outline-variant/30 rounded-lg p-8 hover:border-secondary hover:bg-surface-container-low transition-all"
          >
            <Globe className="text-secondary shrink-0" size={24} />
            <div>
              <span className="font-display text-xl font-semibold block">{office.city}</span>
              {office.status === "opening-soon" && (
                <span className="font-label text-[10px] uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-0.5 rounded-full inline-block mt-2">
                  Opening Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Story />
      <WhyChooseUs />
      <GlobalPresence />
    </>
  );
}
