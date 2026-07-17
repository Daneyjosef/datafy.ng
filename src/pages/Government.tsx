import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  FileStack,
  Fingerprint,
  Globe,
  Landmark,
  Map,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const COMMAND_CENTER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCQrePIWnjvmVdheiIolexIsv52qy36VgN9X2s7sHeEEmI1gV_BATV0RPYmro1o7_DXpKsw4pR3RUanr8SAzyKNMXbxihJbNjQUHbhtpqEeqGfo-o408Gmgc5GEV7HMFxp5cw80tUADEJIcaYyNRlD31x32laqpVD1EgcZr_F1gRK04W624BzzxujMyKPRYILOsifK_Hm_5kqBBgVHT2MSlsecxlmTZj2koOFs33sBa56lJ370EajsF";
const SERVER_ROOM_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvKrGTRL3XqMcbMCHEXidqUpR2dmkmE7pW50GSI4CkAgBBzPHr_TpzZNp_SMEfImzgxRxJ2hWEP82G20tbaUMem4DZbhGaBRQW9qN7uphGsHGpf_As94WUzSgtRVmuuZizPQ0YHQ1FS11hPwyF5cP9ataeCYajICNfuq1TQJLfqUgXuFzYh5Zg4Oe2cKj7n2FUGESxO3R4qjVB78UjZY1W-aVBBTiJDWfePvQFV6PJ0IDYLJZgsUq";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden reveal">
      <div className="px-page max-w-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="font-label text-xs uppercase text-secondary">Public Sector Excellence</span>
          </div>
          <h1 className="font-display text-[44px] leading-[1.1] lg:text-[64px] font-bold text-primary max-w-3xl">
            Powering the Digital Backbone of <span className="text-secondary italic">Sovereign Nations</span>.
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant max-w-2xl">
            Datafy supports public institutions with secure, scalable, and resilient digital
            infrastructure designed for national complexity. From citizen identity to automated tax
            systems, we bridge the gap between policy and technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/signup/government"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Rocket size={18} />
              Get Early Access
            </Link>
            <button className="border border-outline-variant px-8 py-4 rounded-lg font-semibold text-primary hover:bg-surface-container-low transition-colors">
              Security Framework
            </button>
          </div>
          <div className="pt-12 grid grid-cols-3 gap-8 border-t border-outline-variant/30">
            <div>
              <div className="font-display text-3xl font-semibold text-primary">99.9%</div>
              <div className="font-label text-xs text-on-surface-variant uppercase">Uptime Mandate</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-primary">ISO</div>
              <div className="font-label text-xs text-on-surface-variant uppercase">27001 Certified</div>
            </div>
            <div>
              <div className="font-display text-3xl font-semibold text-primary">15M+</div>
              <div className="font-label text-xs text-on-surface-variant uppercase">Verified Citizens</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative lg:block hidden">
          <div className="relative w-full aspect-square bg-surface-container-high rounded-full overflow-hidden shadow-2xl border-4 border-surface-white">
            <img
              className="w-full h-full object-cover grayscale-[20%]"
              alt="Command center visualization"
              src={COMMAND_CENTER_IMAGE}
            />
            <div className="absolute inset-0 bg-secondary/5 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl shadow-xl border border-secondary/20 max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <ShieldCheck size={20} />
              </div>
              <span className="text-lg font-bold text-primary">Encrypted Infrastructure</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full mb-2">
              <div className="h-full w-4/5 bg-secondary rounded-full" />
            </div>
            <p className="text-xs text-on-surface-variant">
              Real-time threat mitigation active across 12 ministry nodes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section className="py-32 px-page max-w-container mx-auto reveal">
      <div className="mb-20 space-y-4">
        <span className="font-label text-xs uppercase tracking-widest text-secondary">
          Comprehensive Portfolio
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-primary max-w-2xl leading-tight">
          National Scale Systems for Modern Governance.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
        <div className="md:col-span-8 group relative overflow-hidden bg-primary-container rounded-xl p-12 text-on-primary min-h-[450px] flex flex-col justify-end">
          <div className="relative z-10 space-y-6">
            <span className="font-label text-xs text-primary-fixed uppercase tracking-[0.2em]">
              Core Infrastructure
            </span>
            <h3 className="font-display text-3xl font-semibold leading-tight max-w-lg">
              Unified e-Government Platforms for Seamless Agency Collaboration.
            </h3>
            <p className="text-on-primary/70 max-w-md">
              Our flagship platform centralizes all ministerial data, allowing for real-time policy
              impact analysis and inter-departmental resource optimization.
            </p>
            <button className="flex items-center gap-2 font-semibold text-primary-fixed hover:gap-4 transition-all">
              View Case Studies <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 flex flex-col hover:border-secondary/40 transition-colors">
          <Landmark className="text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-bold text-primary mb-4">Tax Management</h3>
          <p className="text-on-surface-variant mb-auto">
            Automated revenue collection and compliance auditing designed for complex national
            fiscal structures.
          </p>
          <hr className="my-6 border-outline-variant/20" />
          <div className="flex justify-between items-center">
            <span className="font-label text-xs text-secondary">FIN-TECH</span>
            <ArrowUpRight className="text-on-surface-variant" size={20} />
          </div>
        </div>

        <div className="md:col-span-4 glass-card border border-outline-variant/30 rounded-xl p-8 hover:-translate-y-1 transition-transform">
          <Fingerprint className="text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-bold text-primary mb-4">Identity Management</h3>
          <p className="text-on-surface-variant">
            Biometric-first digital IDs that serve as the foundation for modern financial inclusion
            and public services.
          </p>
        </div>

        <div className="md:col-span-4 glass-card border border-outline-variant/30 rounded-xl p-8 hover:-translate-y-1 transition-transform">
          <Globe className="text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-bold text-primary mb-4">Citizen Portals</h3>
          <p className="text-on-surface-variant">
            Mobile-first interfaces that put government services in the hands of millions,
            increasing accessibility and trust.
          </p>
        </div>

        <div className="md:col-span-4 bg-surface-container-highest/30 border border-outline-variant/30 rounded-xl p-8 hover:-translate-y-1 transition-transform">
          <Building2 className="text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-bold text-primary mb-4">Smart City Tech</h3>
          <p className="text-on-surface-variant">
            IoT-driven urban infrastructure for traffic management, utility monitoring, and public
            safety automation.
          </p>
        </div>

        <div className="md:col-span-6 glass-card border border-outline-variant/30 rounded-xl p-8 hover:-translate-y-1 transition-transform">
          <Map className="text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-bold text-primary mb-4">Land Administration</h3>
          <p className="text-on-surface-variant">
            Digitized cadastral records and title registries that bring transparency and speed to
            land governance.
          </p>
        </div>

        <div className="md:col-span-6 bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 hover:border-secondary/40 transition-colors">
          <FileStack className="text-secondary mb-6" size={40} />
          <h3 className="text-2xl font-bold text-primary mb-4">Document Management Systems</h3>
          <p className="text-on-surface-variant">
            Centralized, auditable records management for ministries handling sensitive
            institutional documentation.
          </p>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  const items = [
    "Sovereign Data Residency Compliance",
    "Real-time SOC/SIEM Monitoring",
    "Blockchain-verified Audit Trails",
  ];

  return (
    <section className="bg-primary-container py-32 overflow-hidden relative reveal">
      <div className="px-page max-w-container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="p-4 inline-block bg-secondary/10 rounded-lg text-secondary border border-secondary/30">
            <ShieldCheck size={40} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-on-primary">
            Uncompromising Security Architecture.
          </h2>
          <p className="font-body text-lg text-on-primary/70">
            Our sovereign cloud deployments ensure that national data remains under domestic
            jurisdiction. We employ military-grade encryption and zero-trust protocols across every
            layer of the digital stack.
          </p>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-4 text-on-primary">
                <CheckCircle2 className="text-secondary" size={24} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
            <img className="w-full h-full object-cover" alt="High-tech server room" src={SERVER_ROOM_IMAGE} />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 border-2 border-secondary/20 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-page max-w-container mx-auto text-center reveal">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold text-primary">
          Ready to Transform National Infrastructure?
        </h2>
        <p className="font-body text-lg text-on-surface-variant">
          Partner with Africa's leading government technology specialists. We provide the expertise
          and tools required for large-scale institutional modernization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-primary-container text-on-primary px-10 py-5 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
            Request Strategy Session
          </button>
          <button className="bg-surface-container-high text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all">
            Download Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
}

export function Government() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <SolutionsGrid />
      <SecuritySection />
      <CTA />
    </>
  );
}
