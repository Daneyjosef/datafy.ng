import type { VercelRequest, VercelResponse } from "@vercel/node";
import { searchDomains, isMockMode, DEFAULT_TLDS } from "../../lib/providers";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { query, tlds } = (req.body ?? {}) as { query?: unknown; tlds?: unknown };

  if (!query || typeof query !== "string") {
    res.status(400).json({ error: "A domain name query is required." });
    return;
  }

  const sanitized = query.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (!sanitized) {
    res.status(400).json({ error: "Enter a valid domain name (letters, numbers, hyphens)." });
    return;
  }

  const requestedTlds =
    Array.isArray(tlds) && tlds.every((t) => typeof t === "string") && tlds.length > 0
      ? (tlds as string[])
      : DEFAULT_TLDS;

  try {
    const results = await searchDomains(sanitized, requestedTlds);
    res.status(200).json({
      query: sanitized,
      results,
      mock: isMockMode(),
    });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Domain search failed.",
    });
  }
}
