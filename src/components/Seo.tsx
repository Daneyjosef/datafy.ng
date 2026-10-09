import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const metadata: Record<string, { title: string; description: string }> = {
  "/": { title: "Datafy Technology | Technology That Moves Africa Forward", description: "Datafy designs intelligent digital products, secure infrastructure, and scalable technology solutions for a connected future." },
  "/about": { title: "About Datafy Technology", description: "Meet Datafy Technology Limited, a Nigerian technology company building intelligent products, secure infrastructure, and enterprise solutions." },
  "/contact": { title: "Start a Project | Datafy Technology", description: "Tell Datafy about your technology project, product, infrastructure, or digital transformation goals." },
  "/industries": { title: "Industries | Datafy Technology", description: "Explore how Datafy applies secure, scalable technology across financial services, government, healthcare, education, logistics, and more." },
  "/privacy": { title: "Privacy Policy | Datafy Technology", description: "How the Datafy corporate website handles information." },
  "/terms": { title: "Website Terms | Datafy Technology", description: "Terms for using the Datafy Technology corporate website." },
};

const labels: Record<string, string> = {
  "/ai-solutions": "Artificial Intelligence & Automation", "/enterprise-software": "Software Engineering & Product Development",
  "/cloud-infrastructure": "Cloud & Infrastructure Engineering", "/cybersecurity": "Cybersecurity & Digital Trust",
  "/digital-transformation": "Enterprise Digital Transformation", "/government": "Government Digital Solutions",
  "/fintech": "Fintech & Systems Integration", "/smart-energy": "Smart Energy Technology", "/domains-hosting": "Domains & Hosting",
};

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
}

export function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const fallback = labels[pathname]
      ? { title: `${labels[pathname]} | Datafy Technology`, description: `Explore ${labels[pathname].toLowerCase()} from Datafy Technology.` }
      : { title: "Page Not Found | Datafy Technology", description: "Return to the Datafy Technology website." };
    const current = metadata[pathname] ?? fallback;
    const canonical = `https://datafy.ng${pathname === "/" ? "" : pathname}`;
    document.title = current.title;
    setMeta('meta[name="description"]', "content", current.description);
    setMeta('meta[property="og:title"]', "content", current.title);
    setMeta('meta[property="og:description"]', "content", current.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
    link.href = canonical;
  }, [pathname]);
  return null;
}
