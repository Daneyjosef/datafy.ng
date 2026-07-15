import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Industry = {
  category: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  linkText: string;
};

const INDUSTRIES: Industry[] = [
  {
    category: "FinTech & Banking",
    title: "Financial Services",
    description:
      "Resilient payment gateways, AI-driven risk assessment, and core banking modernization for the next generation of finance.",
    features: ["Compliance & Regulatory Tech", "Fraud Detection AI"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZsGD8-w0fDwKNBDniiXGvgTEcJ8OhoGeawzInN735B6m6V-pWJeu590QrY2I0FINwLrjBZNR2v6I6eiM3VQpp3dC7NRIuHqwcFEADBxU40S46vjLmxFdtg6btIVvIviw4kMgcJ56Jlr89xk7ZkIdZm0yti9vWGY3qn3-DGgbzpP8SkVJT13sgjwS6RPuDGw2Z2lmj0hQ9WK4DcbHU_vRxrGqrIE7EeVz55KGF5y0MB6Hm1odQ0ZXF",
    linkText: "Explore Financial",
  },
  {
    category: "HealthTech",
    title: "Healthcare",
    description:
      "Patient-centric digital health platforms and telemedicine infrastructure designed for accessibility and data security.",
    features: ["Health Data Interoperability", "Remote Patient Monitoring"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVVLuz5_OWgF3jj4PVbeeo_uR5HJxzaSHb7kLNlssoWz0x7kctMRjPORO47S4ujUzA49Yi4vKsMY1GrA8lJSw5uPF2clsI5gTB1izazmKHn6uN4i9oO61WBhBIycESg0G7L4mwTa9AWWs_oiRKCxVqIm82avdd7RZG-V75LWV6X7mAYkkoMTNmZFkvbC9L_SCHDmNHOW2xZpDpH3wtREJO1pyc7Z3wn-Qa5x-fHJ2wr7YpCG_2bAft",
    linkText: "Explore Health",
  },
  {
    category: "EdTech",
    title: "Education",
    description:
      "Scaling learning through robust LMS development, virtual classrooms, and data-driven student performance analytics.",
    features: ["Adaptive Learning Platforms", "Institutional Resource Planning"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCySYN7UbeAa5OmAeq3bUp_j0vMNrKxGEeFeur_CR29CMnMF7KAvNl3VaDMKHzZ6aoc-0DDxycperMRohIVMbUgrc3FdvCSidvVdjb4MlmAnj315NOI73V-D0N6jBMefDSDpsUVLB1YzBg8NxX8JrTVrv_1EesBX6gZWDTgXC_emxOFUEqlrOa6xwLYmTxdHuKdagUlYZ_c8k41a4JT7kjAiIu4JMHGfWdBTQxbvfVZmSp5R974gmO5",
    linkText: "Explore Education",
  },
  {
    category: "Supply Chain",
    title: "Logistics",
    description:
      "Optimizing movement through IoT tracking, automated fleet management, and predictive supply chain modeling.",
    features: ["Real-time Fleet Tracking", "Warehouse Automation"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDab0CFqpD-ZjWdYYf_8qwqO2oewOONZoaJsqajA4HlrAof5TI-xkQOxlCWUxT1ZmoUA7hZYH4u_3Q1wnZHM98jYJndaPOOXy3VKWWCm3rd2oyGIi4Ss_SdaAs-t_dZlF2juHhsNAqUfbNTFJYcNGk9J9Rg-Ewo4RAFWVE98sbgjw5gImUAI991yqRa9AiWmf4rm4Ila8tbFHvhtQ-w5q0oESvxTNyotaBaE1w4-eWNEoPjCGbHXB_J",
    linkText: "Explore Logistics",
  },
  {
    category: "Energy & Natural Resources",
    title: "Oil & Gas",
    description:
      "Modernizing traditional infrastructure with digital twins, predictive maintenance, and real-time operational visibility.",
    features: ["Digital Twin Modeling", "HSE Data Management"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr-rWI1qUKdd-25y_KBPM0gsEORpeyiR0Kj_4DOuBF7naxDM5DXeKu-CikFuIqHSKWX1x2DXt4NBj-xYCg6YzDm0SVi35sToujiHkJEPLzteJyXlPKJkGOhzcug1QjnDQT_Gm5_xIVSAelFLW9HsdveyaFUAf5jjsHrGrRaibFkYC0ARqu1_UgBOGvZGgcElBxlA_L0_3aNCVO8PA33AikgkmcsP3ynCEOG9AUJhVGgp0W5n64Lnz4",
    linkText: "Explore Energy",
  },
  {
    category: "Community & Non-Profit",
    title: "Faith-Based Organizations",
    description:
      "Streamlining operations and expanding reach through digital engagement tools and centralized management systems.",
    features: ["Donor Management Systems", "Global Content Streaming"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqu1f7PIDmcp-zhYps6ntXO6uX_cPkpZ2g9_4GLZ9Uc3VclOSeCwHNTHZJkMyS9SAm8uxzdTqMfLLuxVJaqOswtV9mhVbOriUrEyhrUxe_Qgra63FygVewwXLYZ-JXbYJCLGOiGJ2eSGq1iQVXs7D0wZaR3yV8KOGDD8a7sS5DAN1xcSTOB2P_-JRu1GR6Cc0NnEsxmzVPn8IMKTrRGILmHrxv7xs6TE-iB5_sEzliiPhlt4hd1arX",
    linkText: "Explore Community",
  },
];

const FEATURED_TRANSFORMATION_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2zmfYxJntajI_pcFFd0sEiracOt5pPc33v_UekStqGU1a4UvkK38wTEY9e3PpYtQutQWBSWI0q9vL4NzCChWcgYtfyQSdLJfvIuzYpYoI7jJXDwE6PMY6Ql68NUF7BzitGJhnYUlMWeyCM9hnxufa_iGutnWLawr6ddDSaYGhSAsGDweM3PMW4lvPcAOIMAx3S6HVJ249sL5cORt0QnbZYpG24PT9yEBvjNVQXo_eLknlXF95ZDtm";

function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pb-32 px-page max-w-container mx-auto overflow-hidden reveal">
      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">
            Standard of Excellence
          </span>
          <h1 className="font-display text-[44px] leading-[1.1] lg:text-[64px] font-bold mb-6">
            Strategic Impact Across Every <span className="text-secondary">Industry.</span>
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant mb-10 max-w-xl">
            At Datafy Technology, we bridge the gap between complex enterprise challenges and
            transformative digital solutions. Our deep domain expertise ensures your industry leads
            in the global digital economy.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white font-body px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-secondary transition-all">
              Partner With Us <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-outline-variant text-primary font-body px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all">
              View Case Studies
            </button>
          </div>
        </div>
        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl bg-surface-container-high/20">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end p-8">
            <div className="glass-card p-6 rounded-lg w-full">
              <p className="font-label text-xs uppercase text-secondary mb-2">Live Transformation</p>
              <p className="font-display text-2xl font-semibold text-on-primary-fixed">
                Digitalizing Pan-African Logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ title, category, description, features, image, linkText }: Industry) {
  return (
    <div className="group relative bg-surface-white border border-outline-variant/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
      <div
        className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="p-8">
        <span className="font-label text-xs uppercase tracking-widest text-secondary block mb-2">
          {category}
        </span>
        <h3 className="font-display text-2xl font-semibold mb-4">{title}</h3>
        <p className="font-body text-on-surface-variant mb-6">{description}</p>
        <ul className="space-y-3 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-on-surface-variant">
              <CheckCircle2 className="text-secondary w-4 h-4" /> {feature}
            </li>
          ))}
        </ul>
        <a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all" href="#">
          {linkText} <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-24 bg-surface-container-low/30 px-page reveal">
      <div className="max-w-container mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4">Domain Expertise</h2>
          <p className="font-body text-on-surface-variant max-w-2xl">
            Six specialized divisions focused on unique regulatory environments, operational
            hurdles, and growth opportunities within the global landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {INDUSTRIES.map((item) => (
            <IndustryCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalStandards() {
  return (
    <section className="py-32 px-page max-w-container mx-auto reveal">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-4">Engineered for Longevity</h2>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
          Our partnerships aren't just about delivery; they are about co-creating the future of your
          organization through measurable outcomes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-gutter auto-rows-[280px]">
        <div className="md:col-span-4 lg:col-span-8 bg-primary-container p-12 rounded-xl flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-10 transition-opacity group-hover:opacity-20">
            <TrendingUp className="w-[200px] h-[200px] text-white" />
          </div>
          <div className="relative z-10">
            <span className="font-label text-xs uppercase text-secondary-fixed mb-4 block">
              Measurable Value
            </span>
            <h3 className="font-display text-3xl font-semibold text-white mb-6">
              40% Average Increase in Operational Efficiency
            </h3>
            <p className="text-on-primary-fixed-variant font-body max-w-lg">
              Through precision data engineering and cloud native transitions, we help enterprises
              strip away legacy friction and focus on their core mission.
            </p>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-4 glass-card p-10 rounded-xl border-outline-variant/10 flex flex-col">
          <Handshake className="text-secondary mb-6 w-10 h-10" />
          <h3 className="font-display text-2xl font-semibold mb-4 text-primary leading-tight">
            Strategic Advisory
          </h3>
          <p className="text-on-surface-variant font-body">
            We don't just build; we guide. Our consultants provide the roadmap for multi-year
            digital evolution.
          </p>
        </div>
        <div className="md:col-span-2 lg:col-span-4 bg-surface-container-high p-10 rounded-xl flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-2">Global Standards</h3>
            <p className="text-on-surface-variant font-body">
              ISO-compliant security protocols baked into every line of code.
            </p>
          </div>
          <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-6 mt-6">
            <ShieldCheck className="text-secondary w-5 h-5" />
            <span className="font-label text-xs uppercase">Secure Infrastructure</span>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-8 group relative rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('${FEATURED_TRANSFORMATION_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
          <div className="relative z-10 h-full p-12 flex flex-col justify-center max-w-md">
            <span className="font-label text-xs uppercase text-secondary mb-2">
              Featured Transformation
            </span>
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              The Nairobi Financial Hub Evolution
            </h3>
            <p className="text-white/80 font-body mb-6">
              How a regional leader transitioned to a serverless ecosystem in 12 months.
            </p>
            <a className="text-secondary-fixed font-bold flex items-center gap-2" href="#">
              Read Case Study <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 bg-surface-container-lowest reveal">
      <div className="max-w-container mx-auto px-page text-center">
        <div className="bg-primary p-16 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Lead Your Industry?
            </h2>
            <p className="text-primary-fixed-dim text-lg mb-10 max-w-2xl mx-auto">
              Join the ranks of enterprises that have secured their future through strategic digital
              transformation with Datafy Technology.
            </p>
            <button className="bg-secondary text-white font-display px-12 py-5 rounded-lg hover:bg-secondary-fixed-dim hover:text-on-secondary-fixed transition-all">
              Request Industry Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <ExpertiseSection />
      <GlobalStandards />
      <CTA />
    </>
  );
}
