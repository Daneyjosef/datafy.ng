import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { DomainSearch } from "../components/DomainSearch";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "domains-hosting")!;

export function DomainsHosting() {
  return (
    <SolutionPageTemplate solution={solution}>
      <section className="py-16 px-page max-w-container mx-auto reveal">
        <DomainSearch />
      </section>
    </SolutionPageTemplate>
  );
}
