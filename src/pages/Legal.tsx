import { Link } from "react-router-dom";

export function Privacy() {
  return <article className="legal-page"><div className="max-w-3xl mx-auto px-page">
    <span className="eyebrow">Datafy Technology Limited</span><h1>Privacy policy</h1><p className="legal-updated">Last updated: 8 October 2026</p>
    <p>This page explains how the Datafy corporate website handles information. It does not replace the separate policies of Datafy Pay, Datafy Hub, or other Datafy products.</p>
    <h2>Information you choose to provide</h2><p>The project enquiry form prepares an email in your own email application. The website does not store the form contents. If you send that email, Datafy receives the details through its business email service and uses them to respond to your enquiry.</p>
    <h2>Technical information</h2><p>Our hosting provider may process standard request information needed to deliver and protect the website, such as IP address, browser type, requested page, and time of access. Domain searches submitted through the site are sent to our server-side search endpoint and may be passed to configured registrar providers.</p>
    <h2>How information is used</h2><p>Information is used to respond to enquiries, operate and secure the website, provide requested services, and meet legal obligations. We do not publish or sell enquiry information.</p>
    <h2>Your choices</h2><p>You can choose not to submit the enquiry form and contact us directly. For questions or requests concerning your information, email <a href="mailto:info@datafy.ng">info@datafy.ng</a>.</p>
    <h2>Changes</h2><p>We may update this notice as the website and its services evolve. The date above shows the latest revision.</p>
    <Link to="/contact" className="button-primary mt-8">Contact Datafy</Link>
  </div></article>;
}

export function Terms() {
  return <article className="legal-page"><div className="max-w-3xl mx-auto px-page">
    <span className="eyebrow">Datafy Technology Limited</span><h1>Website terms</h1><p className="legal-updated">Last updated: 8 October 2026</p>
    <p>These terms apply to use of Datafy’s corporate website. Product platforms linked from this site may have their own terms.</p>
    <h2>Website information</h2><p>We aim to keep the website accurate and available, but information may change and the site may occasionally be unavailable. Content is provided for general information and does not create a client relationship or guarantee a project outcome.</p>
    <h2>Product status</h2><p>Products marked “coming soon” are not yet generally available. Descriptions of planned services are informational and may change before launch.</p>
    <h2>Acceptable use</h2><p>Do not misuse the website, attempt unauthorized access, interfere with its operation, or submit unlawful, deceptive, or harmful material.</p>
    <h2>Intellectual property</h2><p>The Datafy name, logo, website design, and original content belong to Datafy Technology Limited or their respective licensors. You may not reproduce them for commercial use without permission.</p>
    <h2>External services</h2><p>Links to external products and services are provided for convenience. Their separate terms and policies apply when you visit them.</p>
    <h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:info@datafy.ng">info@datafy.ng</a>.</p>
    <Link to="/contact" className="button-primary mt-8">Contact Datafy</Link>
  </div></article>;
}

export function NotFound() {
  return <section className="legal-page text-center"><div className="max-w-2xl mx-auto px-page"><span className="eyebrow">404 · Page not found</span><h1>This page has moved beyond the map.</h1><p>Return to the Datafy homepage or start a conversation with our team.</p><div className="flex justify-center gap-3 mt-8"><Link to="/" className="button-primary">Back home</Link><Link to="/contact" className="button-secondary">Contact us</Link></div></div></section>;
}
