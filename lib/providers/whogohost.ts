import type { DomainAvailabilityResult } from "./types";

/**
 * WhoGoHost reseller adapter — handles Nigerian ccTLDs (.ng, .com.ng, .org.ng, .name.ng, ...)
 * that require registration through a NiRA-accredited registrar.
 *
 * STATUS: MOCK ONLY. The WhoGoHost reseller application has not been submitted/approved yet,
 * and their reseller API's exact base URL, auth scheme, and endpoint shapes are not public —
 * they're provided directly to approved resellers. This file returns simulated data so the
 * search UI and signup funnel can be built and demoed end-to-end today.
 *
 * TO GO LIVE:
 *   1. Get approved as a WhoGoHost reseller and obtain their reseller API documentation.
 *   2. Set WHOGOHOST_API_KEY, WHOGOHOST_RESELLER_ID, WHOGOHOST_API_BASE_URL in the environment.
 *   3. Replace the mock branch below with the real HTTP call per their docs.
 *   4. Remove the "mock: true" flag this adapter reports to the frontend.
 */

const NG_TLDS = [".ng", ".com.ng", ".org.ng", ".name.ng", ".edu.ng", ".gov.ng"];

export function handlesTld(tld: string): boolean {
  return NG_TLDS.includes(tld.toLowerCase());
}

export async function checkAvailability(
  query: string,
  tlds: string[]
): Promise<DomainAvailabilityResult[]> {
  const relevantTlds = tlds.filter(handlesTld);
  if (relevantTlds.length === 0) return [];

  const hasLiveCredentials = Boolean(process.env.WHOGOHOST_API_KEY);

  if (!hasLiveCredentials) {
    return relevantTlds.map((tld) => mockResult(query, tld));
  }

  throw new Error(
    "WHOGOHOST_API_KEY is set, but the live WhoGoHost API call has not been implemented yet — " +
      "confirm their reseller API docs and update lib/providers/whogohost.ts."
  );
}

function mockResult(query: string, tld: string): DomainAvailabilityResult {
  // Deterministic pseudo-availability so demos are stable across repeated searches,
  // rather than flickering randomly on every request.
  const available = (query.length + tld.length) % 3 !== 0;
  return {
    domain: `${query}${tld}`,
    tld,
    available,
    price: {
      currency: "NGN",
      registration: tld === ".ng" ? 15000 : 8000,
      renewal: tld === ".ng" ? 15000 : 8000,
    },
    provider: "whogohost",
  };
}
