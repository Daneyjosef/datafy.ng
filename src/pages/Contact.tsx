import { Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { OFFICES } from "../data/offices";

function Hero() {
  return (
    <section className="pt-44 pb-16 px-page max-w-container mx-auto reveal">
      <div className="max-w-3xl">
        <span className="font-label text-xs uppercase tracking-widest text-secondary mb-6 block">
          Let's Build the Future Together
        </span>
        <h1 className="font-display text-[40px] leading-[1.1] lg:text-[56px] font-bold mb-8">
          Ready to transform your <span className="text-gradient">business?</span>
        </h1>
        <p className="font-body text-lg lg:text-xl text-on-surface-variant">
          Whether you're launching a startup, modernizing your enterprise, or transforming a
          government agency, Datafy Technology is ready to help you move forward with confidence.
          Contact us today for a free consultation.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-16 px-page max-w-container mx-auto reveal">
      <div className="grid lg:grid-cols-12 gap-16">
        <form className="lg:col-span-7 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
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
              <label htmlFor="email" className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
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
            <label htmlFor="company" className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
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
            <label htmlFor="message" className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
              How can we help?
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-on-primary px-10 py-4 rounded font-display text-lg hover:bg-secondary transition-colors"
          >
            Request a Free Consultation
          </button>
        </form>

        <div className="lg:col-span-5 space-y-10">
          <div>
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              Email
            </h3>
            <a
              href="mailto:hello@datafy.ng"
              className="flex items-center gap-3 font-display text-2xl font-semibold hover:text-secondary transition-colors"
            >
              <Mail className="text-secondary" size={24} />
              hello@datafy.ng
            </a>
          </div>

          <div>
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              Global Offices
            </h3>
            <ul className="space-y-4">
              {OFFICES.map((office) => (
                <li key={office.city} className="flex items-center gap-3 font-body text-lg">
                  <MapPin className="text-secondary shrink-0" size={20} />
                  {office.city}
                  {office.status === "opening-soon" && (
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                      Opening Soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <ContactSection />
    </>
  );
}
