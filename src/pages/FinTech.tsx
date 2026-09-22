import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SOLUTIONS } from "../data/solutions";
import { useScrollReveal } from "../hooks/useScrollReveal";

const solution = SOLUTIONS.find((item) => item.slug === "fintech")!;

export function FinTech() {
  useScrollReveal();

  return (
    <>
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 px-page max-w-container mx-auto reveal">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">Payments & FinTech</span>
            <h1 className="font-display text-[42px] leading-[1.1] lg:text-[60px] font-bold mb-7">Payments technology built for <span className="text-gradient">real life.</span></h1>
            <p className="font-body text-lg lg:text-xl text-on-surface-variant mb-9">Datafy Pay is our live product for everyday payments. We also work with organizations on payment and financial technology projects.</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://pay.datafy.ng/" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-secondary transition-colors">Explore Datafy Pay <ArrowRight size={18} /></a>
              <Link to="/contact" className="border border-outline-variant px-8 py-4 rounded font-semibold hover:bg-surface-container-low transition-colors">Discuss a project</Link>
            </div>
          </div>
          <div className="bg-primary-container rounded-3xl p-8 lg:p-12 text-white">
            <span className="font-label text-xs uppercase tracking-widest text-secondary-fixed">Live product</span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold mt-6 mb-5">Datafy Pay</h2>
            <p className="text-white/75 text-lg mb-9">One place to pay bills, buy airtime and data, move money, and manage supported digital assets.</p>
            <a href="https://pay.datafy.ng/" className="inline-flex items-center gap-2 text-secondary-fixed font-semibold hover:text-white transition-colors">Visit the product <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-surface-container-low reveal">
        <div className="px-page max-w-container mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="font-label text-xs uppercase tracking-widest text-secondary mb-4 block">For organizations</span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold mb-5">Payment technology services</h2>
            <p className="text-lg text-on-surface-variant">Tell us about the payment challenge you need to solve. These are areas our team can help you explore and build.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solution.services.map((service) => (
              <div key={service} className="flex items-start gap-4 bg-white rounded-xl p-6">
                <CheckCircle2 size={21} className="text-secondary shrink-0 mt-0.5" />
                <span className="font-body text-lg">{service}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 font-semibold text-secondary hover:text-primary transition-colors">Talk to our team <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
