import type { SkillGroup } from "@/domain/skill";
import type { Dictionary } from "../i18n";

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
      <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.id}
            className="p-6 border rounded-2xl border-white/10 bg-gradient-to-b from-indigo to-midnight"
          >
            <p className="headtext">{group.label}</p>
            <ul className="mt-3 space-y-1 subtext">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
