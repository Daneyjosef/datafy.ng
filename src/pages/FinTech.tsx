import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "fintech")!;

export function FinTech() {
  return <SolutionPageTemplate solution={solution} />;
}
