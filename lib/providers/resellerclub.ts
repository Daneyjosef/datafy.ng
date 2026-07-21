import type { DomainAvailabilityResult } from "./types";

/**
 * ResellerClub adapter — handles global TLDs (.com, .net, .org, .africa, ...).
 *
 * STATUS: MOCK ONLY. No reseller account has been created yet. ResellerClub's public API
 * (historically at https://httpapi.com/api, authenticated via auth-userid + api-key query
 * params) is documented at https://manage.resellerclub.com/kb/node/1330 — but exact endpoint
 * paths and response shapes should be re-verified against their current docs once you have a
 * reseller account, since APIs evolve and this file has not been tested against them.
 *
 * TO GO LIVE:
 *   1. Create a ResellerClub reseller account and obtain your auth-userid + api-key.
 *   2. Set RESELLERCLUB_API_KEY, RESELLERCLUB_RESELLER_ID, RESELLERCLUB_API_BASE_URL.
 *   3. Replace the mock branch below with a real call to their domains/available.json
 *      endpoint (or whatever their current docs specify), and map their response shape
 *      into DomainAvailabilityResult.
 *   4. Remove the "mock: true" flag this adapter reports to the frontend.
 */

const HANDLED_BY_OTHERS = [".ng", ".com.ng", ".org.ng", ".name.ng", ".edu.ng", ".gov.ng"];

export function handlesTld(tld: string): boolean {
  return !HANDLED_BY_OTHERS.includes(tld.toLowerCase());
}

const MOCK_PRICING: Record<string, number> = {
  ".com": 15000,
  ".net": 17000,
  ".org": 16000,
  ".africa": 22000,
  ".io": 45000,
};

export async function checkAvailability(
  query: string,
  tlds: string[]
): Promise<DomainAvailabilityResult[]> {
  const relevantTlds = tlds.filter(handlesTld);
  if (relevantTlds.length === 0) return [];

  const hasLiveCredentials = Boolean(process.env.RESELLERCLUB_API_KEY);

  if (!hasLiveCredentials) {
    return relevantTlds.map((tld) => mockResult(query, tld));
  }

  throw new Error(
    "RESELLERCLUB_API_KEY is set, but the live ResellerClub API call has not been implemented " +
      "yet — verify their current docs and update lib/providers/resellerclub.ts."
  );
}

function mockResult(query: string, tld: string): DomainAvailabilityResult {
  const available = (query.length + tld.length) % 4 !== 0;
  const price = MOCK_PRICING[tld] ?? 18000;
  return {
    domain: `${query}${tld}`,
    tld,
    available,
    price: {
      currency: "NGN",
      registration: price,
      renewal: price,
    },
    provider: "resellerclub",
  };
}
