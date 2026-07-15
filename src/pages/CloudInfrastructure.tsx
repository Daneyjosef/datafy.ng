import { SolutionPageTemplate } from "../components/SolutionPageTemplate";
import { SOLUTIONS } from "../data/solutions";

const solution = SOLUTIONS.find((s) => s.slug === "cloud-infrastructure")!;

export function CloudInfrastructure() {
  return <SolutionPageTemplate solution={solution} />;
}
