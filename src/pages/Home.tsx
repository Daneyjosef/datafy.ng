import { ArrowRight, Eye, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { ADVANTAGES, PROCESS_STEPS, SOLUTIONS } from "../data/solutions";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbY4kJ8LrnevTRKgvPH9Ybcu2iDsvw0S4WsLvWRDhwcZbR6kSQXBW7dTRwj0cvVnqcFOjnbpywAfEcQPIvc6GyW1yzV4hbvz6Q5DcexW367haIBiXXOLxfJ3wmUX7s9kvxHjjj56T2gil9cGGRqno1eyr6E5j1WDkikFx-ZgXCj6-SHmtNUTNwAsB0l_bYxjxUnsf5IJp_HLuQtxPfERJewKWxP08xMOqX6boEZN691CAk2PrSxHtR";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface reveal pt-20">
      <div className="max-w-container mx-auto px-page w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
            Standard of Excellence
          </span>
          <h1 className="font-display text-[44px] leading-[1.1] lg:text-[72px] lg:leading-[1.1] font-bold mb-8">
            Transforming Businesses Through <span className="text-gradient">Technology & AI</span>
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant mb-10 max-w-xl">
            Africa's trusted digital transformation partner. We engineer precision solutions that
            scale enterprise capabilities and drive global impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-10 py-4 rounded font-body font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/10">
              Schedule a Consultation
            </button>
            <button className="border border-outline-variant px-10 py-4 rounded font-body font-bold hover:bg-surface-container-low transition-all">
              View Case Studies
            </button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="aspect-square glass-card rounded-2xl overflow-hidden relative shadow-2xl">
            <img
              className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
              src={HERO_IMAGE}
              alt="Professional Executive Portrait"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
              <p className="font-label text-xs uppercase tracking-widest mb-2">Impact Highlight</p>
              <p className="font-display text-2xl font-bold">250% Growth for Pan-African FinTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="py-32 bg-surface-bright reveal" id="about">
      <div className="max-w-container mx-auto px-page">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8">
              Technology That Powers the Future
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body text-lg">
              <p>
                Datafy is not just a technology provider; we are architects of digital resilience.
                Founded on the principle of "Strategic Sophistication," we bridge the gap between
                legacy operations and future-ready innovation.
              </p>
              <p>
                From our hubs in Lagos and Nairobi, we deliver global standards with localized
                intelligence, ensuring that every solution is optimized for the unique challenges
                of the African enterprise landscape.
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
      </div>
    </section>
  );
}

function ServiceCards() {
  return (
    <section className="py-32 bg-surface reveal" id="solutions">
      <div className="max-w-container mx-auto px-page">
        <div className="text-center mb-20">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
            Our Solutions
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold">Enterprise-Grade Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link
                key={solution.slug}
                to={solution.path}
                className="group relative overflow-hidden rounded-2xl bg-surface-container-low p-8 h-72 transition-all hover:bg-primary-container hover:text-on-primary flex flex-col"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <Icon className="w-10 h-10 mb-6 group-hover:text-secondary-fixed transition-colors" />
                  <h3 className="font-display text-xl font-semibold mb-3">{solution.navLabel}</h3>
                  <p className="font-body text-sm opacity-70 mb-auto">{solution.description}</p>
                  <span className="font-label text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform">
                    Explore Solution <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-36 h-36" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section className="py-32 bg-primary-container text-on-primary overflow-hidden relative reveal">
      <div className="max-w-container mx-auto px-page relative z-10">
        <div className="max-w-2xl mb-20">
          <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed mb-4 block">
            Why Choose Datafy?
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8">
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

function Methodology() {
  return (
    <section className="py-32 bg-surface reveal">
      <div className="max-w-container mx-auto px-page">
        <div className="mb-20 max-w-xl">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Our Process</h2>
          <p className="text-on-surface-variant font-body text-lg">
            From initial discovery to long-term operational support, our process is designed for
            transparency and velocity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="space-y-4">
              <span className="font-label text-xs text-secondary-fixed-dim bg-secondary/10 px-3 py-1 rounded-full inline-block">
                {step.step}
              </span>
              <h4 className="font-display text-2xl font-semibold">{step.title}</h4>
              <p className="text-on-surface-variant font-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="relative py-32 overflow-hidden reveal">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/vr-vision.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-container mx-auto px-page">
        <div className="text-center max-w-4xl mx-auto">
          <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed mb-6 block">
            Our Vision for 2030
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8 text-white">
            We envision a future where African businesses compete globally through intelligent
            technology.
          </h2>
          <p className="font-body text-lg text-white/80">
            By 2030, Datafy Technology aims to be one of Africa's leading providers of AI,
            enterprise software, cybersecurity, cloud infrastructure, fintech, and digital
            transformation services—helping organizations innovate, scale, and create lasting
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-primary text-on-primary reveal">
      <div className="max-w-container mx-auto px-page">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed mb-6 block">
            Call to Action
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8">
            Let's Build the Future Together
          </h2>
          <p className="font-body text-lg opacity-80 mb-10">
            Whether you're launching a startup, modernizing your enterprise, or transforming a
            government agency, Datafy Technology is ready to help you move forward with
            confidence.
          </p>
          <p className="font-body text-lg opacity-80 mb-10">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
          <button className="bg-secondary text-on-secondary px-10 py-4 rounded font-body font-bold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <About />
      <ServiceCards />
      <Advantages />
      <Methodology />
      <VisionSection />
      <CTASection />
    </>
  );
}
