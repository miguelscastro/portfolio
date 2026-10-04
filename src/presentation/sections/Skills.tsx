import {
  Activity,
  Cloud,
  Database,
  FlaskConical,
  Languages,
  Monitor,
  Server,
  type LucideIcon,
} from "lucide-react";
import type { SkillGroup } from "@/domain/skill";
import type { Dictionary } from "../i18n";

interface GroupLayout {
  icon: LucideIcon;
  /** Grid columns: two across at tablet, six-column bento at desktop. */
  span: string;
}

/** Presentation-only layout per group id; unknown groups get a default card. */
const layouts: Record<string, GroupLayout> = {
  "backend-infra": { icon: Server, span: "sm:col-span-2 lg:col-span-4" },
  cloud: { icon: Cloud, span: "lg:col-span-2" },
  databases: { icon: Database, span: "lg:col-span-2" },
  frontend: { icon: Monitor, span: "lg:col-span-2" },
  testing: { icon: FlaskConical, span: "lg:col-span-2" },
  observability: { icon: Activity, span: "sm:col-span-2 lg:col-span-2" },
  languages: { icon: Languages, span: "sm:col-span-2 lg:col-span-4" },
};

const fallback: GroupLayout = { icon: Server, span: "lg:col-span-2" };

export function Skills({
  groups,
  dict,
}: {
  groups: readonly SkillGroup[];
  dict: Dictionary["skills"];
}) {
  return (
    <section className="c-space section-spacing" id="skills">
      <h2 className="text-heading">{dict.title}</h2>
      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-6">
        {groups.map((group) => {
          const { icon: Icon, span } = layouts[group.id] ?? fallback;
          return (
            <div
              key={group.id}
              className={`p-6 border rounded-2xl border-white/10 bg-gradient-to-b from-indigo to-midnight ${span}`}
            >
              <div className="flex items-center gap-3">
                <Icon className="size-5 text-neutral-400" aria-hidden />
                <h3 className="text-xl">{group.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 mt-5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full text-neutral-300 bg-white/5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
