# Datafy website redesign handoff

## What changed

- Premium white-and-green homepage with Apple-inspired product storytelling: centered copy, immersive product stages, paired feature tiles, restrained motion, and generous neutral space.
- Responsive sticky navigation with accessible desktop menus and a mobile navigation panel.
- Shared visual system applied to existing routes through the current Tailwind/Vite setup.
- Dynamic footer with products, solutions, company pages, verified locations, contact email, and current year.
- Page-aware titles, descriptions, canonical URLs, Open Graph fields, `robots.txt`, and `sitemap.xml`.
- Privacy, website terms, and not-found pages.
- Contact form remains a validated email-client handoff; no visitor data is stored by this frontend.
- Existing domain search endpoints and provider integrations remain in place.

## Local verification

```powershell
npm install
npm run lint
npm run build
npm run dev
```

Check the homepage and every route listed in `public/sitemap.xml` at desktop and mobile widths. Domain search requires Vercel Functions (or `vercel dev`); plain Vite development cannot serve the `/api` endpoints.

## Staging deployment

1. Push `redesign/premium-datafy-site` to the remote repository.
2. Create a preview deployment in Vercel from that branch.
3. Configure only the environment variables already documented in `.env.example`. Keep registrar credentials in the hosting provider's encrypted environment settings.
4. Verify navigation, metadata, the contact email handoff, domain-search behavior, and all linked Datafy subdomains on the preview URL.
5. Obtain explicit approval before merging to the production branch or assigning the production domain.

## Rollback

- If the redesign has not been merged, keep production on the current production branch and remove the preview deployment.
- If it has been merged, use Vercel's deployment history to promote the last known-good production deployment immediately. Then revert the redesign merge in Git with a new revert commit; do not rewrite shared branch history.
- Confirm that `datafy.ng`, redirects, and API routes resolve after rollback.

## Launch notes

- Confirm the legal wording with Datafy's legal or leadership team before production.
- Replace the email-client enquiry handoff only when an approved server-side submission service, validation policy, spam controls, and retention policy are available.
- Datafy Data must remain marked **Coming soon** until its launch is formally approved.
