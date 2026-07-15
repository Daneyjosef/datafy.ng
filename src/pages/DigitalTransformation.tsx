import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "digital-transformation")!;

export function DigitalTransformation() {
  return <SolutionPageTemplate solution={solution} />;
}
