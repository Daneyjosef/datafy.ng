import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "enterprise-software")!;

export function EnterpriseSoftware() {
  return <SolutionPageTemplate solution={solution} />;
}
