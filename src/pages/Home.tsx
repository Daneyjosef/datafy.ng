import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Cloud,
  Code,
  Eye,
  Rocket,
  Shield,
  Wallet,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-surface-container-low p-8 h-96 transition-all hover:bg-primary-container hover:text-on-primary">
      <div className="relative z-10 h-full flex flex-col">
        <Icon className="w-10 h-10 mb-6 group-hover:text-secondary-fixed transition-colors" />
        <h3 className="font-display text-2xl font-semibold mb-4">{title}</h3>
        <p className="font-body opacity-70 mb-auto">{description}</p>
        <a
          className="font-label text-xs uppercase tracking-widest flex items-center group-hover:translate-x-2 transition-transform"
          href="#"
        >
          Explore Solution <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
      <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
        <Icon className="w-48 h-48" />
      </div>
    </div>
  );
}

const SERVICES: ServiceCardProps[] = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Predictive analytics and automated decision engines tailored for complex market dynamics.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    description: "Bespoke enterprise applications built with modern frameworks and microservices architecture.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud migration and management focusing on high availability and cost-optimization.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Advanced threat detection and data protection protocols for mission-critical operations.",
  },
  {
    icon: Wallet,
    title: "FinTech Systems",
    description: "Payment gateways, digital wallets, and blockchain integrations for the financial sector.",
  },
  {
    icon: Zap,
    title: "Energy Solutions",
    description: "Smart grid management and sustainable technology systems for the energy infrastructure.",
  },
];

function ServiceCards() {
  return (
    <section className="py-32 bg-surface reveal" id="solutions">
      <div className="max-w-container mx-auto px-page">
        <div className="text-center mb-20">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
            Precision Engineering
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold">Enterprise-Grade Solutions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    {
      title: "Innovation First",
      description:
        "We don't just follow trends; we set them. Our R&D labs are constantly prototyping the next generation of enterprise tools.",
    },
    {
      title: "Enterprise Expertise",
      description:
        "With decades of combined experience in global consultancies, we bring rigor and reliability to every project.",
    },
    {
      title: "Security by Design",
      description:
        "Data integrity and cybersecurity are not afterthoughts; they are the bedrock upon which we build everything.",
    },
  ];

  return (
    <section className="py-32 bg-primary-container text-on-primary overflow-hidden relative reveal">
      <div className="max-w-container mx-auto px-page relative z-10">
        <div className="max-w-2xl mb-20">
          <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed mb-4 block">
            The Datafy Advantage
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-8">
            Engineering Certainty in an Uncertain World
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div
              key={item.title}
              className="border-l border-on-primary-fixed-variant pl-8 py-4 hover:border-secondary-fixed transition-colors"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="opacity-70 font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type MethodologyStepProps = { step: string; title: string; description: string };

function MethodologyStep({ step, title, description }: MethodologyStepProps) {
  return (
    <div className="space-y-4">
      <span className="font-label text-xs text-secondary-fixed-dim bg-secondary/10 px-3 py-1 rounded-full inline-block">
        {step}
      </span>
      <h4 className="font-display text-2xl font-semibold">{title}</h4>
      <p className="text-on-surface-variant font-body">{description}</p>
    </div>
  );
}

const METHODOLOGY_STEPS: MethodologyStepProps[] = [
  {
    step: "Step 01",
    title: "Discover",
    description: "Immersive workshops to understand your business ecosystem and identify strategic levers.",
  },
  {
    step: "Step 02",
    title: "Architect",
    description: "Designing high-fidelity blueprints for technical infrastructure and user experience flow.",
  },
  {
    step: "Step 03",
    title: "Engineer",
    description: "Agile development cycles with continuous integration and automated testing protocols.",
  },
  {
    step: "Step 04",
    title: "Support",
    description: "24/7 technical oversight and iterative optimization to ensure sustained performance.",
  },
];

function Methodology() {
  return (
    <section className="py-32 bg-surface reveal">
      <div className="max-w-container mx-auto px-page">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Strategic Methodology</h2>
            <p className="text-on-surface-variant font-body text-lg">
              From initial discovery to long-term operational support, our process is designed for
              transparency and velocity.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {METHODOLOGY_STEPS.map((step) => (
            <MethodologyStep key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden reveal">
      <div className="max-w-container mx-auto px-page">
        <div className="glass-card rounded-[2rem] p-10 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
              Vision 2030
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-bold mb-8">
              Shaping the Future of African Commerce
            </h2>
            <p className="font-body text-lg text-on-surface-variant mb-10">
              We are currently developing a sovereign cloud framework for Pan-African trade. Join us
              as we redefine what's possible on the continent.
            </p>
            <button className="bg-primary text-on-primary px-10 py-4 rounded font-body font-bold hover:bg-secondary transition-all">
              Learn About the Initiative
            </button>
          </div>
          <div className="flex-1 w-full relative z-10">
            <div className="bg-primary rounded-2xl p-8 text-on-primary space-y-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="font-label text-xs opacity-60">PHASE 01 COMPLETION</span>
                <span className="font-label text-xs">84%</span>
              </div>
              <div className="h-1 bg-on-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary-fixed w-[84%] transition-all duration-1000" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-xs opacity-60 uppercase">Countries Reached</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">1.2M</p>
                  <p className="text-xs opacity-60 uppercase">Transactions Processed</p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}
