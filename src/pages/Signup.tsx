import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CheckCircle2, Rocket } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SOLUTIONS } from "../data/solutions";

export function Signup() {
  useScrollReveal();

  const { slug } = useParams<{ slug?: string }>();
  const [searchParams] = useSearchParams();
  const domainParam = searchParams.get("domain");
  const matchedSolution = SOLUTIONS.find((s) => s.slug === slug);

  const [selectedSlug, setSelectedSlug] = useState(matchedSolution?.slug ?? "");
  const [message, setMessage] = useState(
    domainParam ? `I'm interested in registering ${domainParam}.` : ""
  );
  const [submitted, setSubmitted] = useState(false);

  const selectedSolution = SOLUTIONS.find((s) => s.slug === selectedSlug);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-44 pb-32 px-page max-w-container mx-auto reveal">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-secondary" size={32} />
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold mb-6">
            You're on the list.
          </h1>
          <p className="font-body text-lg text-on-surface-variant">
            {selectedSolution
              ? `Thanks for your interest in ${selectedSolution.navLabel}. We're building it now and
                will reach out as soon as early access opens.`
              : "Thanks for signing up. We'll be in touch as soon as early access opens."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-44 pb-16 px-page max-w-container mx-auto reveal">
        <div className="max-w-3xl">
          <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
            Early Access
          </span>
          <h1 className="font-display text-[40px] leading-[1.1] lg:text-[56px] font-bold mb-8">
            {matchedSolution ? (
              <>
                Get early access to{" "}
                <span className="text-gradient">{matchedSolution.navLabel}.</span>
              </>
            ) : (
              <>
                Get early access to what we're <span className="text-gradient">building.</span>
              </>
            )}
          </h1>
          <p className="font-body text-lg lg:text-xl text-on-surface-variant">
            We're developing dedicated software products across our solution areas. Sign up and
            we'll notify you the moment early access opens for the service you're interested in.
          </p>
        </div>
      </section>

      <section className="py-16 px-page max-w-container mx-auto reveal">
        <div className="grid lg:grid-cols-12 gap-16">
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                Company
              </label>
              <input
                id="company"
                type="text"
                className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Your organization"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                Which service are you interested in?
              </label>
              <select
                id="service"
                required
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SOLUTIONS.map((solution) => (
                  <option key={solution.slug} value={solution.slug}>
                    {solution.navLabel}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block"
              >
                What are you hoping to solve? (optional)
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us a bit about your use case..."
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-on-primary px-10 py-4 rounded font-display text-lg hover:bg-secondary transition-colors inline-flex items-center gap-3"
            >
              <Rocket size={20} />
              Join the Waitlist
            </button>
          </form>

          <div className="lg:col-span-5">
            <div className="bg-surface-container-low rounded-2xl p-8 sticky top-32">
              <h3 className="font-display text-xl font-semibold mb-4">Why sign up early?</h3>
              <ul className="space-y-4">
                {[
                  "First access when the product launches",
                  "Shape the roadmap with direct feedback",
                  "Founding-user pricing where applicable",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-on-surface-variant">
                    <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={18} />
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
