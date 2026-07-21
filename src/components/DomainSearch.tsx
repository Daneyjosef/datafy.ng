import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Search } from "lucide-react";

type DomainResult = {
  domain: string;
  tld: string;
  available: boolean;
  price: { currency: string; registration: number; renewal: number };
  provider: "whogohost" | "resellerclub";
};

type SearchResponse = {
  query: string;
  results: DomainResult[];
  mock: boolean;
  error?: string;
};

const TLD_OPTIONS = [".com.ng", ".ng", ".com", ".africa"];

export function DomainSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<SearchResponse | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("/api/domains/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed, tlds: TLD_OPTIONS }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Search failed (${res.status})`);
      }

      const data: SearchResponse = await res.json();
      setResponse(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Couldn't reach the domain search service. This feature requires the site to be running its backend functions (e.g. via Vercel), not just the plain frontend dev server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-container-low rounded-2xl p-8 lg:p-10">
      <h3 className="font-display text-2xl font-semibold mb-2">Check Domain Availability</h3>
      <p className="font-body text-on-surface-variant mb-6">
        Search across .com.ng, .ng, .com, and .africa in one go.
      </p>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="yourbusinessname"
          className="flex-1 border-b-2 border-outline-variant bg-transparent py-3 px-1 font-body text-lg focus:border-primary focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="bg-primary text-on-primary px-8 py-3 rounded font-display text-lg hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Search size={18} />}
          Search
        </button>
      </form>

      {error && (
        <p className="font-body text-sm text-error mb-6">{error}</p>
      )}

      {response && (
        <div className="space-y-3">
          {response.mock && (
            <p className="font-label text-[10px] uppercase tracking-widest text-secondary bg-secondary/10 inline-block px-3 py-1 rounded-full mb-2">
              Demo Data — Registrar Integration Pending
            </p>
          )}
          {response.results.map((result) => (
            <div
              key={result.domain}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-4"
            >
              <div>
                <span className="font-display text-lg font-semibold block">{result.domain}</span>
                <span
                  className={`font-label text-xs uppercase tracking-widest ${
                    result.available ? "text-secondary" : "text-on-surface-variant"
                  }`}
                >
                  {result.available ? "Available" : "Taken"}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-body text-lg">
                  ₦{result.price.registration.toLocaleString()}
                  <span className="text-on-surface-variant text-sm">/yr</span>
                </span>
                {result.available ? (
                  <Link
                    to={`/signup/domains-hosting?domain=${encodeURIComponent(result.domain)}`}
                    className="bg-secondary text-on-secondary px-5 py-2.5 rounded font-body font-semibold text-sm hover:opacity-90 transition-all whitespace-nowrap"
                  >
                    Join Waitlist
                  </Link>
                ) : (
                  <span className="text-on-surface-variant text-sm px-5 py-2.5">—</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
