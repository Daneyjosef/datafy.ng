import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "cybersecurity")!;

export function Cybersecurity() {
  return <SolutionPageTemplate solution={solution} />;
}
