import { Timeline } from "../components/Timeline";
import { experiences } from "../constants/index";

export function Experiences() {
  return (
    <>
      <div className="w-full mt-100 sm:mb-350 sm:mt-0 relative" id="experience">
        <Timeline data={experiences} />
      </div>
    </>
  );
}
