import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "smart-energy")!;

export function SmartEnergy() {
  return <SolutionPageTemplate solution={solution} />;
}
