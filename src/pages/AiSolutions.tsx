import {
  ArrowRight,
  BarChart3,
  Cpu,
  FileText,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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
            <button className="bg-primary text-on-primary px-8 py-4 rounded font-display text-lg hover:bg-secondary transition-colors">
              Deploy AI Solutions
            </button>
            <button className="border border-outline-variant px-8 py-4 rounded font-display text-lg hover:bg-surface-container-low transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square bg-surface-container-low rounded-full flex items-center justify-center animate-float">
            <div className="glass-card p-8 rounded-xl shadow-xl w-64 absolute -top-4 -right-4 z-20">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="text-secondary" size={20} />
                <span className="font-label text-xs uppercase">Decision Engine</span>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[85%]" />
              </div>
              <p className="text-[10px] mt-2 text-on-surface-variant">Efficiency Optimization: 85%</p>
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
              Eliminate operational bottlenecks by deploying intelligent agents that manage complex
              workflows with 99.9% accuracy.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 border border-outline-variant/30 rounded-lg p-10 hover:border-secondary transition-all flex flex-col justify-between group">
          <Headphones className="text-secondary transition-transform group-hover:scale-110" size={40} />
          <div>
            <h3 className="font-display text-2xl font-semibold mb-3">AI Customer Support</h3>
            <p className="font-body text-on-surface-variant">
              Conversational interfaces that resolve issues instantly, anywhere in the world.
            </p>
          </div>
        </div>

        <div className="md:col-span-1 md:row-span-1 bg-surface-container-low rounded-lg p-10 flex flex-col justify-between">
          <div>
            <FileText className="text-primary mb-6" size={40} />
            <h3 className="font-display text-2xl font-semibold mb-3">Document Processing</h3>
          </div>
          <p className="font-body text-on-surface-variant">
            Extract structured insights from millions of unstructured documents in seconds.
          </p>
        </div>

        <div className="md:col-span-2 md:row-span-1 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="border border-outline-variant/30 rounded-lg p-10 hover:bg-surface-bright transition-all flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-3">Predictive Analytics</h3>
              <p className="font-body text-on-surface-variant mb-6">
                Anticipate market shifts and consumer behavior before they happen.
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
                Custom LLM training and integration for specialized industry requirements.
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
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/60 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <div className="glass-card p-6 rounded-lg">
              <p className="font-body text-on-primary-fixed italic">
                "Datafy's strategy wasn't just about the technology; it was about reimagining our
                entire service model through the lens of intelligence."
              </p>
              <div className="mt-4 border-t border-outline-variant/20 pt-4 flex justify-between items-center">
                <span className="font-label text-xs uppercase">Global Head of Digital, FinTech Africa</span>
                <ShieldCheck className="text-secondary" size={20} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
            The Transformation Journey
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8 leading-tight">
            Strategy & <span className="font-normal italic">Consulting</span>
          </h2>
          <p className="font-body text-on-surface-variant mb-12">
            We don't just build models; we architect transformation. Our consulting team works with
            C-suite leaders to define AI roadmaps that align with specific business outcomes,
            ensuring every investment delivers measurable ROI.
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
          <button className="mt-12 group flex items-center gap-3 font-display text-lg text-primary hover:text-secondary transition-colors">
            Book a Strategy Session
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-24 px-page max-w-container mx-auto border-y border-outline-variant/10 reveal">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Real-Time Precision</h2>
          <p className="font-body text-on-surface-variant">
            Our models operate at the edge of possibility, delivering sub-second latency and
            unprecedented precision in high-stakes environments.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="text-center">
            <div className="font-display text-[64px] text-primary">0.4s</div>
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Latency
            </span>
          </div>
          <div className="text-center">
            <div className="font-display text-[64px] text-secondary">99%</div>
            <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Precision
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] bg-surface-container rounded-xl relative overflow-hidden flex items-center justify-center">
        <div className="glass-card px-10 py-8 rounded-full border border-white/20">
          <span className="font-label text-xs tracking-widest text-primary uppercase">
            Neural Network Status: Optimized
          </span>
        </div>
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
        <button className="bg-primary-container text-on-primary px-12 py-6 rounded font-display text-xl hover:bg-primary transition-all shadow-xl active:scale-95">
          Consult Our Engineers
        </button>
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
      <StrategySection />
      <StatsSection />
      <CTASection />
    </>
  );
}
