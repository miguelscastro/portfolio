import type { Experience } from "@/domain/experience";
import { Timeline } from "../components/Timeline";

export function Experiences({
  experiences,
}: {
  experiences: readonly Experience[];
}) {
  return (
    <div className="w-full relative" id="experience">
      <Timeline data={experiences} />
    </div>
  );
}
