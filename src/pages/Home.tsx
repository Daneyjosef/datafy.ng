import { ArrowRight, CreditCard, ReceiptText, ShieldCheck, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SOLUTIONS } from "../data/solutions";

const PAY_URL = "https://pay.datafy.ng/";

function Hero() {
  return (
    <section className="bg-surface pt-28 pb-20 lg:pt-36 lg:pb-24 reveal">
      <div className="max-w-container mx-auto px-page grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">Datafy Technology</span>
          <h1 className="font-display text-[44px] leading-[1.08] lg:text-[60px] lg:leading-[1.08] font-bold mb-7 max-w-4xl">
            Digital products and technology <span className="text-gradient">built for Africa.</span>
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant mb-10 max-w-2xl">
            We build useful digital products and help organizations design, develop, and run the technology behind their work. Datafy Pay is live today.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={PAY_URL} className="bg-primary text-on-primary px-8 py-4 rounded font-body font-bold hover:bg-secondary transition-colors inline-flex items-center gap-2">
              Explore Datafy Pay <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="border border-outline-variant px-8 py-4 rounded font-body font-bold hover:bg-surface-container-low transition-colors">
              Talk to us about a project
            </Link>
          </div>
        </div>
        <div className="bg-primary-container rounded-3xl p-7 sm:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4 mb-10">
              <span className="font-display text-2xl font-semibold">Datafy Pay</span>
              <span className="font-label text-xs uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 rounded-full px-3 py-1">Live product</span>
            </div>
            <p className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">Everyday payments in one clear place.</p>
            <p className="text-white/75 mb-7 max-w-sm">Pay bills, buy airtime and data, move money, and manage supported digital assets.</p>
            <div className="grid grid-cols-2 gap-3 mb-7" aria-label="Datafy Pay capabilities">
              {[
                { icon: ReceiptText, label: "Bills" },
                { icon: CreditCard, label: "Airtime & data" },
                { icon: Wallet, label: "Transfers" },
                { icon: ShieldCheck, label: "Account security" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 bg-white/10 rounded-xl p-4 text-sm font-medium">
                  <Icon size={19} className="text-secondary-fixed shrink-0" /> {label}
                </div>
              ))}
            </div>
            <a href={PAY_URL} className="inline-flex items-center gap-2 font-semibold text-secondary-fixed hover:text-white transition-colors">
              Visit pay.datafy.ng <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 lg:py-28 bg-surface-bright reveal" id="services">
      <div className="max-w-container mx-auto px-page">
        <div className="max-w-3xl mb-12">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">Our services</span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-5">Technology for the work you need to do.</h2>
          <p className="font-body text-lg text-on-surface-variant">From product development to cloud infrastructure and security, we help teams turn a clear need into working technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <Link key={solution.slug} to={solution.path} className="group rounded-2xl bg-surface-container-low p-7 min-h-56 flex flex-col hover:bg-primary-container hover:text-white transition-colors">
                <Icon size={30} className="mb-6 text-secondary group-hover:text-secondary-fixed" />
                <h3 className="font-display text-xl font-semibold mb-3">{solution.navLabel}</h3>
                <p className="font-body text-sm opacity-75 mb-6">{solution.description}</p>
                <span className="mt-auto font-label text-xs uppercase tracking-wider inline-flex items-center gap-2">Explore service <ArrowRight size={15} /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="py-20 lg:py-28 reveal">
      <div className="max-w-container mx-auto px-page grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div>
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">How we work</span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Clear goals. Useful technology.</h2>
          <p className="text-on-surface-variant font-body text-lg">We start with the problem your team needs to solve, design a practical path forward, and support what we build after launch.</p>
        </div>
        <div className="grid gap-4">
          {[
            ["01", "Understand", "Define the users, business needs, and measures of success."],
            ["02", "Build", "Design and deliver the product or system around those needs."],
            ["03", "Improve", "Support the release and refine it using real feedback."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-5 border-b border-outline-variant/50 pb-5">
              <span className="font-label text-sm text-secondary pt-1">{number}</span>
              <div><h3 className="font-display text-xl font-semibold mb-2">{title}</h3><p className="text-on-surface-variant">{description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-primary-container text-white reveal">
      <div className="max-w-container mx-auto px-page text-center max-w-4xl">
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-6">Have a project in mind?</h2>
        <p className="text-lg text-white/75 mb-9">Tell us what you are trying to build or improve. We will help you find a practical next step.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded font-semibold hover:bg-secondary-fixed transition-colors">Contact Datafy <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}

export function Home() {
  useScrollReveal();
  return <><Hero /><Services /><Approach /><CTA /></>;
}
