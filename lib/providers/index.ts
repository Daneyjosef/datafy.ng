import * as whogohost from "./whogohost";
import * as resellerclub from "./resellerclub";
import type { DomainAvailabilityResult } from "./types";

export const DEFAULT_TLDS = [".com.ng", ".ng", ".com", ".africa"];

export async function searchDomains(
  query: string,
  tlds: string[]
): Promise<DomainAvailabilityResult[]> {
  const ngTlds = tlds.filter(whogohost.handlesTld);
  const globalTlds = tlds.filter(resellerclub.handlesTld);

  const [ngResults, globalResults] = await Promise.all([
    whogohost.checkAvailability(query, ngTlds),
    resellerclub.checkAvailability(query, globalTlds),
  ]);

  return [...ngResults, ...globalResults];
}

export function isMockMode(): boolean {
  return !process.env.WHOGOHOST_API_KEY && !process.env.RESELLERCLUB_API_KEY;
}

export type { DomainAvailabilityResult } from "./types";
