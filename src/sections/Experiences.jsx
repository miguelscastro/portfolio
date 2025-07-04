import { Timeline } from "../components/Timeline";
import { experiences } from "../constants/index";

export function Experiences() {
  return (
    <>
      <div className="w-full ">
        <Timeline data={experiences} />
      </div>
    </>
  );
}
