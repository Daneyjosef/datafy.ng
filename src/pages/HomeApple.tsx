import { ArrowRight, Bot, Cloud, Code2, CreditCard, Map, ReceiptText, Send, ShieldCheck, Smartphone, WalletCards, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const capabilities = [
  { icon: Code2, name: "Software engineering", to: "/enterprise-software" },
  { icon: Bot, name: "AI & automation", to: "/ai-solutions" },
  { icon: ShieldCheck, name: "Cybersecurity", to: "/cybersecurity" },
  { icon: Cloud, name: "Cloud infrastructure", to: "/cloud-infrastructure" },
  { icon: Workflow, name: "Digital transformation", to: "/digital-transformation" },
  { icon: CreditCard, name: "Fintech integration", to: "/fintech" },
] as const;

const dataSignals = [
  { state: "Lagos", insight: "Population & mobility", x: 25, y: 48 },
  { state: "Kano", insight: "Commerce & agriculture", x: 64, y: 30 },
  { state: "Rivers", insight: "Energy & infrastructure", x: 46, y: 70 },
  { state: "FCT Abuja", insight: "Public services & planning", x: 71, y: 56 },
  { state: "Kaduna", insight: "Transport & agriculture", x: 38, y: 34 },
  { state: "Oyo", insight: "Education & urban growth", x: 58, y: 62 },
] as const;

const payServices = [
  { title: "Bills & utilities", detail: "Manage everyday service payments in one place.", icon: ReceiptText },
  { title: "Airtime & data", detail: "Top up mobile airtime and data when you need it.", icon: Smartphone },
  { title: "Money transfers", detail: "Move money through a clear, connected experience.", icon: Send },
  { title: "Digital assets", detail: "Manage supported digital assets from your account.", icon: WalletCards },
] as const;

function TextLinks({ primary, primaryHref, secondary, secondaryHref }: { primary: string; primaryHref: string; secondary?: string; secondaryHref?: string }) {
  return <div className="apple-links">
    {primaryHref.startsWith("/") ? <Link to={primaryHref}>{primary}<ArrowRight size={16} /></Link> : <a href={primaryHref}>{primary}<ArrowRight size={16} /></a>}
    {secondary && secondaryHref && (secondaryHref.startsWith("/") ? <Link to={secondaryHref}>{secondary}<ArrowRight size={16} /></Link> : <a href={secondaryHref}>{secondary}<ArrowRight size={16} /></a>)}
  </div>;
}

function Hero() {
  return <section className="apple-hero">
    <div className="apple-copy hero-enter">
      <h1>Technology that moves<br /><span>Africa forward.</span></h1>
      <p className="apple-subhead">Intelligent products. Secure infrastructure.<br className="hidden sm:block" /> Built for a connected future.</p>
      <TextLinks primary="Explore our solutions" primaryHref="#solutions" secondary="Start a project" secondaryHref="/contact" />
    </div>
    <div className="apple-hero-stage hero-enter hero-delay-2" aria-hidden="true">
      <div className="orbit-system">
        <div className="apple-halo halo-one" /><div className="apple-halo halo-two" />
        <span className="stage-label label-one"><i>Build</i></span>
        <span className="stage-label label-two"><i>Secure</i></span>
        <span className="stage-label label-three"><i>Scale</i></span>
      </div>
      <div className="apple-globe">
        <div className="globe-surface"><span className="globe-line line-one" /><span className="globe-line line-two" /><span className="globe-line line-three" /><span className="globe-light" /></div>
        <img src="/datafy-icon.png" alt="" />
      </div>
    </div>
  </section>;
}

function PayFeature() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const currentService = payServices[serviceIndex];
  const previousService = payServices[(serviceIndex - 1 + payServices.length) % payServices.length];
  const nextService = payServices[(serviceIndex + 1) % payServices.length];
  const CurrentIcon = currentService.icon;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setServiceIndex((current) => (current + 1) % payServices.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  return <section className="apple-feature apple-feature-dark reveal" id="products">
    <div className="apple-copy apple-copy-light">
      <p className="apple-kicker">Datafy Pay</p><h2>Everyday payments.<br />One clear place.</h2>
      <p className="apple-subhead">Digital payments and integrated financial services, designed for everyday use.</p>
      <TextLinks primary="Explore Datafy Pay" primaryHref="https://pay.datafy.ng/" secondary="Our fintech capability" secondaryHref="/fintech" />
    </div>
    <div className="pay-stage" aria-label="Datafy Pay services carousel">
      <div className="pay-phone pay-phone-left"><span>{previousService.title}</span><small>{previousService.detail}</small><i /><i /><i /></div>
      <div className="pay-phone pay-phone-center">
        <img src="/datafy-icon.png" alt="" /><strong>Pay</strong>
        <div className="pay-service-slide" key={currentService.title}><span className="pay-service-icon"><CurrentIcon size={26} /></span><small>Datafy Pay service</small><b>{currentService.title}</b><p>{currentService.detail}</p></div>
        <div className="pay-service-dots">{payServices.map((service, index) => <i key={service.title} className={index === serviceIndex ? "active" : ""} />)}</div>
      </div>
      <div className="pay-phone pay-phone-right"><span>{nextService.title}</span><small>{nextService.detail}</small><i /><i /><i /></div>
    </div>
  </section>;
}

function DataFeature() {
  const [signalIndex, setSignalIndex] = useState(0);
  const signal = dataSignals[signalIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setSignalIndex((current) => (current + 1) % dataSignals.length),
      4200,
    );
    return () => window.clearInterval(timer);
  }, []);

  return <section className="apple-feature apple-feature-data reveal">
    <div className="apple-copy">
      <p className="apple-kicker">Datafy Data · Coming soon</p><h2>See Nigeria<br />more clearly.</h2>
      <p className="apple-subhead">AI-powered public data discovery and geospatial intelligence focused on Nigeria.</p>
      <TextLinks primary="Discover what’s coming" primaryHref="https://data.datafy.ng/" />
    </div>
    <div className="data-map" aria-label="Illustrative preview of public data themes across Nigerian states">
      <div className="data-map-grid" /><div className="map-shape"><Map size={88} strokeWidth={.7} /></div>
      <i className="map-point point-one" /><i className="map-point point-two" /><i className="map-point point-three" /><i className="map-point point-four" />
      <div className="map-scanner" style={{ left: `${signal.x}%`, top: `${signal.y}%` }}>
        <i /><div className="signal-tag"><span>Live signal</span><b>{signal.insight}</b></div>
      </div>
      <div className="map-card card-one" key={signal.state}><span>{signal.state}</span><b>{signal.insight}</b></div>
      <div className="map-card card-two"><span>Illustrative preview</span><b>Public data signals</b></div>
    </div>
  </section>;
}

function FeatureTiles() {
  return <section className="apple-tiles reveal" id="work">
    <article className="apple-tile apple-tile-hub">
      <div className="apple-copy"><p className="apple-kicker">Datafy Hub</p><h2>Space to do<br />your best work.</h2><p className="apple-subhead">Modern coworking and flexible workspaces.</p><TextLinks primary="Visit Datafy Hub" primaryHref="https://hub.datafy.ng/" /></div>
      <div className="hub-stage" aria-hidden="true">
        <div className="hub-window"><span /><span /><span /></div>
        <div className="hub-worker"><span className="worker-head" /><span className="worker-body" /><span className="worker-arm worker-arm-left" /><span className="worker-arm worker-arm-right" /><span className="worker-chair" /></div>
        <div className="hub-desk"><span className="hub-monitor"><i /></span><b className="hub-monitor-stand" /><em className="hub-keyboard" /></div>
      </div>
    </article>
    <article className="apple-tile apple-tile-work">
      <div className="apple-copy apple-copy-light"><p className="apple-kicker">Selected work</p><h2>Ideas made<br />useful.</h2><p className="apple-subhead">Focused products and dependable digital foundations.</p><TextLinks primary="See our capabilities" primaryHref="#solutions" /></div>
      <div className="work-rings" aria-hidden="true"><span /><span /><span /><img src="/datafy-icon.png" alt="" /></div>
    </article>
  </section>;
}

function Solutions() {
  return <section className="apple-solutions reveal" id="solutions">
    <div className="apple-section-heading"><p className="apple-kicker">Our expertise</p><h2>Everything you need<br />to move forward.</h2><p>From strategy and engineering to secure infrastructure, Datafy brings the essential capabilities together.</p></div>
    <div className="capability-row">{capabilities.map(({ icon: Icon, name, to }) => <Link to={to} key={name} className="capability-pill"><Icon size={24} strokeWidth={1.5} /><span>{name}</span><ArrowRight size={15} /></Link>)}</div>
  </section>;
}

function About() {
  return <section className="apple-about reveal"><div className="apple-about-inner"><p className="apple-kicker">About Datafy</p><h2>Building technology<br />for what comes next.</h2><p>Datafy Technology Limited creates intelligent products, secure infrastructure, and enterprise solutions designed for the realities and opportunities of Africa.</p><TextLinks primary="Meet Datafy" primaryHref="/about" secondary="Talk to our team" secondaryHref="/contact" /></div></section>;
}

export function HomeApple() { useScrollReveal(); return <div className="apple-home"><Hero /><PayFeature /><DataFeature /><FeatureTiles /><Solutions /><About /></div>; }
