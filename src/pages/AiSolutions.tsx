import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  FileText,
  Headphones,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SOLUTIONS } from "../data/solutions";

const AI_SERVICES = SOLUTIONS.find((s) => s.slug === "ai-solutions")!.services;

const STRATEGY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHQ9c1IuU8JJh1DI-8EgLtC_gPM80_BdAT0aZBMT01Ci6hBUauvYeMDSyqHv5ODA_XrBx32XJgCxIzY0vuo4OiEDQREuupHrbXKomsoPOiTZzeoHlr6UmGwVIuaINQ1r1kvyqh8AMwP6SnIqOXtMixFoJBSvHVuRdOxzoS5cXSilnoKG2kwpLQLKN_Ev-WQZTgGellEafE9dQCzsHC-tqgdb9Be8wJzHf95KxKGdmL-LIrMM1rMYT";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-40 px-page max-w-container mx-auto reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-7 z-10">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
            Intelligence at Scale
          </span>
          <h1 className="font-display text-[44px] leading-tight lg:text-[64px] font-bold mb-8">
            Cognitive Solutions for <span className="text-gradient">Enterprise Impact.</span>
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant max-w-xl mb-12">
            Leverage AI to automate repetitive tasks, improve customer experiences, and make
            smarter business decisions with our bespoke neural frameworks.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact?service=Artificial%20Intelligence"
              className="bg-secondary text-on-secondary px-8 py-4 rounded font-display text-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              Discuss an AI project
            </Link>
            <Link to="/contact" className="border border-outline-variant px-8 py-4 rounded font-display text-lg hover:bg-surface-container-low transition-colors">Talk to our team</Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square bg-surface-container-low rounded-full flex items-center justify-center animate-float">
            <div className="glass-card p-8 rounded-xl shadow-xl w-64 absolute -top-4 -right-4 z-20">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-secondary" size={20} />
                <span className="font-label text-xs uppercase">Start with the use case</span>
              </div>
              <p className="text-xs text-on-surface-variant">Explore where automation can support your team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="py-24 px-page max-w-container mx-auto reveal">
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Our AI Capabilities</h2>
        <p className="font-body text-on-surface-variant">
          We bridge the gap between experimental AI and production-ready enterprise technology,
          focusing on five key transformation pillars.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-gutter h-auto md:h-[800px]">
        <div className="md:col-span-2 md:row-span-1 group relative bg-primary-container text-on-primary overflow-hidden rounded-lg p-10 flex flex-col justify-end">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <Cpu size={120} />
          </div>
          <div className="z-10">
            <span className="font-label text-xs uppercase text-secondary-fixed mb-4 block">
              Process optimization
            </span>
            <h3 className="font-display text-3xl font-semibold mb-4">AI Business Automation</h3>
            <p className="font-body text-on-primary/80 max-w-md">
              Reduce repetitive work with carefully designed automation and human review where it matters.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 border border-outline-variant/30 rounded-lg p-10 hover:border-secondary transition-all flex flex-col justify-between group">
          <Headphones className="text-secondary transition-transform group-hover:scale-110" size={40} />
          <div>
            <h3 className="font-display text-2xl font-semibold mb-3">AI Customer Support</h3>
            <p className="font-body text-on-surface-variant">
              Give customers a helpful first response and make handoffs to your team clearer.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 bg-surface-container-low rounded-lg p-10 flex flex-col justify-between">
          <div>
            <FileText className="text-primary mb-6" size={40} />
            <h3 className="font-display text-2xl font-semibold mb-3">Document Processing</h3>
          </div>
          <p className="font-body text-on-surface-variant">
            Organize information from documents so your team can search, review, and act on it.
          </p>
        </div>

        <div className="md:col-span-2 md:row-span-1 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="border border-outline-variant/30 rounded-lg p-10 hover:bg-surface-bright transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="font-body text-on-surface-variant mb-6">
                Use your data to explore patterns and plan with better context.
              </p>
            </div>
            <div className="flex gap-1 h-12 items-end">
              <div className="w-2 bg-secondary/20 h-4" />
              <div className="w-2 bg-secondary/40 h-8" />
              <div className="w-2 bg-secondary/60 h-6" />
              <div className="w-2 bg-secondary h-12" />
            </div>
          </div>
          <div className="bg-secondary-container text-on-secondary-container rounded-lg p-10 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">Generative AI Integration</h3>
              <p className="font-body opacity-80">
                Integrate generative AI into existing workflows with appropriate controls.
              </p>
            </div>
            <Zap className="absolute -bottom-4 -right-4 opacity-10" size={96} />
          </div>
        </div>
      </div>
    </section>
  );
}

const STRATEGY_STEPS = [
  {
    id: "01",
    title: "Feasibility Assessment",
    desc: "Rigorous audit of data infrastructure and organizational readiness for AI adoption.",
  },
  {
    id: "02",
    title: "Ethical Governance",
    desc: "Developing frameworks for responsible AI usage, data privacy, and bias mitigation.",
  },
  {
    id: "03",
    title: "Change Management",
    desc: "Training and cultural alignment to ensure seamless human-AI collaboration.",
  },
];

function AllServices() {
  return (
    <section className="py-24 px-page max-w-container mx-auto reveal">
      <div className="mb-16 max-w-2xl">
        <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
          Services
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold">Full AI Service List</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_SERVICES.map((service) => (
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

function StrategySection() {
  return (
    <section className="py-32 bg-surface-container-low/40 reveal">
      <div className="px-page max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative rounded-xl overflow-hidden shadow-2xl h-[600px]">
          <img
            className="w-full h-full object-cover"
            alt="Business executives reviewing data visualizations"
            src={STRATEGY_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/40 to-transparent" />
        </div>
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
            The Transformation Journey
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
            Strategy & <span className="font-normal italic">Consulting</span>
          </h2>
          <p className="font-body text-on-surface-variant mb-12">
            We start with the task your team needs to improve, assess the data available, and define
            how people will review the output. That gives each AI project a practical purpose and a
            way to measure whether it helps.
          </p>
          <div className="space-y-8">
            {STRATEGY_STEPS.map((step) => (
              <div key={step.id} className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center shrink-0">
                  <span className="font-label text-xs text-secondary">{step.id}</span>
                </div>
                <div>
                  <h4 className="font-display text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact?service=Artificial%20Intelligence" className="mt-12 group flex items-center gap-3 font-display text-lg text-primary hover:text-secondary transition-colors">
            Book a Strategy Session
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="py-24 px-page max-w-container mx-auto border-y border-outline-variant/10 reveal">
      <div className="max-w-2xl mb-12">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Designed for useful outcomes</h2>
        <p className="font-body text-lg text-on-surface-variant">Each use case needs clear inputs, a way to assess its output, and a plan for the people who will use it.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          ["A clear use case", "Choose a specific task and define what improvement would look like."],
          ["Responsible data", "Check data quality, privacy needs, and where human review is required."],
          ["Measured results", "Evaluate the solution with your team before expanding its use."],
        ].map(([title, description]) => (
          <div key={title} className="rounded-xl bg-surface-container-low p-8">
            <h3 className="font-display text-xl font-semibold mb-3">{title}</h3>
            <p className="text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-40 text-center reveal">
      <div className="px-page max-w-3xl mx-auto">
        <h2 className="font-display text-4xl lg:text-6xl font-bold mb-10">
          Ready to automate the <span className="italic font-normal">impossible?</span>
        </h2>
        <p className="font-body text-lg text-on-surface-variant mb-12">
          Connect with our solution architects to build a custom AI ecosystem for your enterprise.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact?service=Artificial%20Intelligence"
            className="bg-primary-container text-on-primary px-12 py-6 rounded font-display text-xl hover:bg-primary transition-all shadow-xl active:scale-95 inline-flex items-center gap-2"
          >
            Discuss Your Project
          </Link>
          <Link
            to="/contact"
            className="border border-outline-variant px-12 py-6 rounded font-display text-xl hover:bg-surface-container-low transition-all"
          >
            Consult Our Engineers
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AiSolutions() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <FeatureGrid />
      <AllServices />
      <StrategySection />
      <PrinciplesSection />
      <CTASection />
    </>
  );
}
