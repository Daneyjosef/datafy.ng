import { Mail, MapPin } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { OFFICES } from "../data/offices";

function Hero() {
  return (
    <section className="pt-40 lg:pt-48 pb-16 px-page max-w-container mx-auto reveal">
      <div className="max-w-3xl">
        <span className="eyebrow mb-6 block">
          Start a project
        </span>
        <h1 className="font-display text-[48px] leading-[.95] lg:text-[82px] tracking-[-0.06em] font-semibold mb-8">
          Let’s build something <span className="text-secondary">remarkable.</span>
        </h1>
        <p className="font-body text-lg lg:text-xl text-on-surface-variant">
          Tell us what you are building, changing, or trying to understand. Share enough context
          for our team to suggest a practical next step.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  const [searchParams] = useSearchParams();
  const domain = searchParams.get("domain");
  const service = searchParams.get("service");
  const industry = searchParams.get("industry");
  const initialMessage = domain
    ? `I'm interested in registering ${domain}.`
    : service
      ? `I'm interested in ${service}.`
      : industry
        ? `I'd like to discuss a project in ${industry}.`
        : "";
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();
    if (website) return;
    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nProject details:\n${message}`);
    window.location.href = `mailto:info@datafy.ng?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 px-page max-w-container mx-auto reveal">
      <div className="grid lg:grid-cols-12 gap-16">
        <form className="lg:col-span-7 space-y-6 bg-white border border-outline-variant/30 p-6 sm:p-10" onSubmit={handleSubmit}>
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 block">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
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
                name="email"
                type="email"
                required
                maxLength={160}
                autoComplete="email"
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
                name="company"
              type="text"
              maxLength={120}
              autoComplete="organization"
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
                name="message"
              required
                minLength={20}
                maxLength={4000}
                rows={5}
                defaultValue={initialMessage}
              className="w-full border-b-2 border-outline-variant bg-transparent py-3 font-body text-lg focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="button-primary"
          >
            Prepare consultation email
          </button>
          <p className="text-sm text-on-surface-variant">This opens a draft in your email app. Please review and send it there.</p>
        </form>

        <div className="lg:col-span-5 space-y-10 lg:pt-8">
          <div>
            <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              Email
            </h3>
            <a
              href="mailto:info@datafy.ng"
              className="flex items-center gap-3 font-display text-2xl font-semibold hover:text-secondary transition-colors"
            >
              <Mail className="text-secondary" size={24} />
              info@datafy.ng
            </a>
          </div>

          <div>
          <h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              Our locations
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
