import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { DomainRegistrationResult } from "../../lib/providers/types";

/**
 * Domain registration is intentionally NOT wired to real provider APIs or payment yet.
 * Taking payment for a domain we cannot actually provision (no approved registrar
 * relationships yet) would be irresponsible. This endpoint always responds with a
 * "pending_provider_setup" status — real registration + Paystack/Flutterwave checkout
 * should be built once WhoGoHost/ResellerClub reseller access is approved.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const result: DomainRegistrationResult = {
    status: "pending_provider_setup",
    message:
      "Domain registration isn't live yet — we're finalizing our registrar partnerships. " +
      "You've been added to our early access list and we'll email you the moment ordering opens.",
  };

  res.status(202).json(result);
}
